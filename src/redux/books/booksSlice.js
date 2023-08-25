import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import APP_ID from '../id';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/apps/${APP_ID}/books`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addBookAsync = createAsyncThunk('books/addBookAsync', async (payload, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/apps/${APP_ID}/books`, payload.newBook);

    if (!response) {
      return Error('Sending a new book is not feasible.');
    }
    return payload.newBook;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const removeBookAsync = createAsyncThunk('books/removeBookAsync', async (payload, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/apps/${APP_ID}/books/${payload.itemID}`);

    if (!response) {
      return Error('Removing the book is not achievable.');
    }
    return payload.itemID;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  books: [],
  loading: false,
  error: '',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = Object.entries(action.payload).map(([id, [book]]) => ({
          item_id: id,
          category: book.category,
          title: book.title,
          author: book.author,
        }));
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
