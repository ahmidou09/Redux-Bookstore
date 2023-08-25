import React from 'react';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../../redux/books/booksSlice';
import APP_ID from '../../redux/id';

function IndividualBook({ id, book }) {
  const {
    category,
    title,
    author,
  } = book;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      removeBookAsync({
        APP_ID,
        itemID: id,
      }),
    );
  };

  return (
    <div className="book">
      <header className="book-header">
        <span className="book-category">{category}</span>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
        <div className="book-actions">
          <button type="button" className="btn btn-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </header>
    </div>
  );
}

IndividualBook.propTypes = {
  id: PropType.string.isRequired,
  book: PropType.shape({
    category: PropType.string.isRequired,
    title: PropType.string.isRequired,
    author: PropType.string.isRequired,
  }).isRequired,
};

export default IndividualBook;
