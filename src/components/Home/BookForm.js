import React, { useState } from 'react';
import './BookForm.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBookAsync({ newBook }));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <h2 className="form-title">Add new Book</h2>
      <form action="#" className="form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          id="title"
          className="input"
          placeholder="Book title"
          required
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          name="author"
          id="author"
          className="input"
          placeholder="Book Author"
          required
        />
        <select
          className="input"
          name="category"
          id="category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Sports">Sports</option>
        </select>
        <button type="submit" className="add-btn">Add Book</button>
      </form>
    </>
  );
}

export default BookForm;
