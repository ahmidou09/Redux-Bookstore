import React from 'react';
import PropTypes from 'prop-types';

function IndividualBook({ title, author, onDelete }) {
  return (
    <div className="individual-book">
      <div>
        <span>{title}</span>
        <span>{author}</span>
      </div>
      <button type="button" className="btn btn-delete" onClick={onDelete}>Delete</button>
    </div>
  );
}

IndividualBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default IndividualBook;
