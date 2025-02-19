import { createSlice } from '@reduxjs/toolkit';
import {
  fetchWords,
  addWord,
  fetchCategories,
  deleteWordById,
  editWord,
  fetchWordsRecommend,
  addRecommendWord,
  fetchTasks,
  addAnswers,
} from './operation';

const initialState = {
  words: [],
  tasks: [],
  answers: [],
  results: [],
  wordsRecommend: [],
  isLoading: false,
  categories: [],
  totalPages: 1,
  filters: {
    keyword: null,
    category: null,
    isIrregular: null,
  },
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
    setRadio(state, action) {
      state.filters.isIrregular = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchWords.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.words = action.payload.results;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchWords.rejected, state => {
        state.isLoading = false;
      })
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(fetchTasks.rejected, state => {
        state.isLoading = false;
      })
      .addCase(fetchWordsRecommend.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchWordsRecommend.fulfilled, (state, action) => {
        state.wordsRecommend = action.payload.results;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchWordsRecommend.rejected, state => {
        state.isLoading = false;
      })

      .addCase(addWord.fulfilled, (state, action) => {
        state.words.push(action.payload);
        state.isLoggedIn = false;
      })
      .addCase(addAnswers.fulfilled, (state, action) => {
        state.results = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(addRecommendWord.fulfilled, (state, action) => {
        state.words.push(action.payload);
        state.isLoggedIn = false;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(deleteWordById.fulfilled, (state, action) => {
        state.words = state.words.filter(
          word => word._id !== action.payload.id
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
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
export const { setFilter, setCategory, setRadio } = wordsSlice.actions;
