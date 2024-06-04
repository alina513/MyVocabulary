import { createSlice } from '@reduxjs/toolkit';
import { fetchWords, addWord } from './operation';

const initialState = {
 words : [],
 isLoading: false
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
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
