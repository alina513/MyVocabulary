export const selectWords = (state) => state.words.words;
export const selectCategories = (state) => state.words.categories;
export const selectTotalPage = (state) => state.words.totalPages;
export const selectCurrentPage = (state) => state.words.currentPage;
export const selectFiltersKeyWord = (state) => state.words.filters.keyword;
export const selectFiltersCategory = (state) => state.words.filters.category;