export const selectWords = state => state.words.words;
export const selectWordsRecommend = state => state.words.wordsRecommend;
export const selectCategories = state => state.words.categories;
export const selectTotalPage = state => state.words.totalPages;
export const selectFiltersKeyWord = state => state.words.filters.keyword;
export const selectFiltersCategory = state => state.words.filters.category;
export const selectFiltersIsIrregular = state =>
  state.words.filters.isIrregular;
export const selectTasks = state => state.words.tasks;
export const selectResults = state => state.words.results;
export const selectIsLoading = state => state.words.isLoading;
