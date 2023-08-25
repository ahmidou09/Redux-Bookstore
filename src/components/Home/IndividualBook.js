import React from 'react';
import './IndividualBook.css';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../../redux/books/booksSlice';
import percent1 from '../../images/percent1.png';
import percent2 from '../../images/percent2.png';
import APP_ID from '../../redux/id';

function IndividualBook({ id, book }) {
  const progress = [percent1, percent2];
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
      <div className="detail">
        <span className="category">{category}</span>
        <h2 className="title">{title}</h2>
        <h3 className="author">{author}</h3>
        <div className="actions">
          <button type="button" className="btn">
            Comments
          </button>
          <span className="separator">|</span>
          <button type="button" className="btn" onClick={handleDelete}>
            Delete
          </button>
          <span className="separator">|</span>
          <button type="button" className="btn">
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <div className="left">
          <img className="image" src={progress[Math.floor(Math.random() * 2)]} alt="Oval progress bar" />
          <div className="percentage">
            <h3 className="percent">
              {Math.floor(Math.random() * 100)}
              %
            </h3>
            <p className="status">Completed</p>
          </div>
        </div>
        <hr className="vertical" />
        <div className="right">
          <p className="part">Current Progress</p>
          <p className="chapter">Chapter3: ALessonLearned</p>
          <button type="button" className="button update">
            Update Progress
          </button>
        </div>
      </div>
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
