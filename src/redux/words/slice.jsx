import { createSlice } from '@reduxjs/toolkit';
import { fetchWords, addWord, fetchCategories, deleteWord, editWord } from './operation';

const initialState = {
 words : [],
 isLoading: false,
 categories: [],
 totalPages: 1,
 currentPage: 1,
 filters: {
  keyword: null,
  category: null,

 }
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,

  reducers: {
    setFilter(state, action) {
      state.filters.keyword = action.payload;
    },
    setCategory(state, action) {
      state.filters.category = action.payload;
    },
  },


  extraReducers: (builder) => {
    builder
      .addCase(fetchWords.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.words = action.payload.results;
        state.isLoggedIn = false;
        state.totalPages = action.payload.totalPages;
        state.currentPage =action.payload.page;
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
export const { setFilter, setCategory } = wordsSlice.actions;