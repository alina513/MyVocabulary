import { createSlice } from '@reduxjs/toolkit';
import { fetchWords, addWord, fetchCategories } from './operation';

const initialState = {
 words : [],
 isLoading: false,
 categories: [],
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWords.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.words = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(fetchWords.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addWord.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addWord.fulfilled, (state, action) => {
        state.words.push(action.payload);
        state.isLoggedIn = false;
      })
      .addCase(addWord.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
