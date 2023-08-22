import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

function IndividualBook({ id, title, author }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="individual-book">
      <div>
        <span>{title}</span>
        <span>{author}</span>
      </div>
      <button type="button" className="btn btn-delete" onClick={handleDelete}>Delete</button>
    </div>
  );
}

IndividualBook.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default IndividualBook;
