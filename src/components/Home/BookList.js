import React from 'react';
import { useSelector } from 'react-redux';
import IndividualBook from './IndividualBook';

function BookList() {
  const { books } = useSelector((state) => state.book);

  return (
    <div className="book-list">
      {books.map((book) => (
        <IndividualBook
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
    </div>
  );
}

export default BookList;
