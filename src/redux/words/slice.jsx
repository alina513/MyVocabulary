import { createSlice } from '@reduxjs/toolkit';
import { fetchWords, addWord, fetchCategories, deleteWord, editWord } from './operation';

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
      })
      .addCase(deleteWord.fulfilled, (state, action) => {
        state.words.filter(word => word._id !== action.payload.id
        );
      })
      .addCase(editWord.fulfilled, (state, action) => {
        const updatedWord = action.payload; 
  state.words = state.words.map(word => {
    if (word._id === updatedWord._id) {
      return updatedWord;
    }
    return word; 
  });
      })
  },
});

export const wordsReducer = wordsSlice.reducer;
