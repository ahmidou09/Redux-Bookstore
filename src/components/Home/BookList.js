import React from 'react';
import PropTypes from 'prop-types';
import IndividualBook from './IndividualBook';

function BookList({ books, onDelete }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <IndividualBook
          key={book.id}
          title={book.title}
          author={book.author}
          onDelete={() => onDelete(book.id)}
        />
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
