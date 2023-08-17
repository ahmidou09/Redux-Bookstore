import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const Home = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (author, title) => {
    const newBook = { id: Date.now(), author, title };
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookForm onSubmit={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Home;
