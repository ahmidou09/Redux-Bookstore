import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, author);
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

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BookForm;
