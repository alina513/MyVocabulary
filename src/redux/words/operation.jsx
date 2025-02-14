import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api';

export const addWord = createAsyncThunk(
  'words/addWord',
  async ({ en, ua, category, isIrregular }, thunkAPI) => {
    try {
      if (category === 'verb') {
        const response = await axios.post('/words/create', {
          en,
          ua,
          category,
          isIrregular,
        });
        return response.data;
      } else {
        const response = await axios.post('/words/create', {
          en,
          ua,
          category,
        });
        return response.data;
      }
    } catch (e) {
      toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'words/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/words/categories');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteWordById = createAsyncThunk(
  'words/deleteWords',
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.delete(`/words/delete/${id}`);
      return response.data;
    } catch (e) {
      toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editWord = createAsyncThunk(
  'words/editWord',
  async ({ id, en, ua, category, isIrregular }, thunkAPI) => {
    try {
      const response = await axios.patch(`/words/edit/${id}`, {
        en,
        ua,
        category,
        isIrregular,
      });
      return response.data;
    } catch (e) {
      toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchWords = createAsyncThunk(
  'words/fetchAll',
  async ({ page, limit = 7, keyword, category, isIrregular }, thunkAPI) => {
    try {
      const params = { page, limit };
      if (keyword) params.keyword = keyword;
      if (category) params.category = category;
      if (isIrregular !== null) params.isIrregular = isIrregular;

      const response = await axios.get('/words/own', {
        params,
      });
      return response.data;
    } catch (e) {
      toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchWordsRecommend = createAsyncThunk(
  'words/fetchAllRecommend',
  async ({ page, limit = 7, keyword, category, isIrregular }, thunkAPI) => {
    try {
      const params = { page, limit };
      if (keyword) params.keyword = keyword;
      if (category) params.category = category;
      if (isIrregular !== null) params.isIrregular = isIrregular;

      const response = await axios.get('/words/all', { params });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addRecommendWord = createAsyncThunk(
  'words/addRecommendWords',
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.post(`/words/add/${id}`, null);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchTasks = createAsyncThunk(
  'words/fetchTasks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/words/tasks');
      return response.data.tasks;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addAnswers = createAsyncThunk(
  'words/addAnswers',
  async ({ data }, thunkAPI) => {
    try {
      const response = await axios.post('/words/answers', data);
      return response.data;
    } catch (e) {
      toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
