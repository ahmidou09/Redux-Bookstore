import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Classics',
    };
    dispatch(addBookAsync({ newBook }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>Add New Book</h3>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        placeholder="Enter Name of author"
        className="input input-author"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book title"
        required
        className="input input-title"
      />
      <button type="submit" className="btn btn-add">Add Book</button>
    </form>
  );
}

export default BookForm;
