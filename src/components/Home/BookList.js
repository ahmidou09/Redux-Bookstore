import React, { useEffect } from 'react';
import './BookList.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/books/booksSlice';
import APP_ID from '../../redux/id';
import IndividualBook from './IndividualBook';

function BookList() {
  const { books, loading } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(APP_ID));
  }, [dispatch]);

  return (
    <div className="card">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <ul className="book-list">
          {books.map((book) => (
            <li className="book-item" key={book.item_id}>
              <IndividualBook id={book.item_id} book={book} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
