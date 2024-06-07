import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

 

  export const addWord = createAsyncThunk(
    'words/addWord',
    async ({ en, ua, category, isIrregular, token}, thunkAPI) => {
      try {
        if(category==="verb")
        {setAuthHeader(token);
        const response = await axios.post('/words/create', { en, ua, category, isIrregular });
        return response.data;}
        else{setAuthHeader(token);
          const response = await axios.post('/words/create', { en, ua, category });
          return response.data;}
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const fetchCategories = createAsyncThunk(
    'words/fetchCategories',
    async (token, thunkAPI) => {
      try {
      
        const response = await axios.get('/words/categories');
        setAuthHeader(response.data.token);
        
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const deleteWord = createAsyncThunk(
    'words/deleteWords',
    async ({id, token} ,thunkAPI) => {
      try {
        setAuthHeader(token);
        const response = await axios.delete(`/words/delete/${id}`);
        setAuthHeader(response.data.token);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  

  export const editWord = createAsyncThunk(
    'words/editWord',
    async ({ id, en, ua, category, isIrregular, token}, thunkAPI) => {
      try {
        setAuthHeader(token);
        const response = await axios.patch(`/words/edit/${id}`, { en, ua , category, isIrregular});
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  // export const fetchWords = createAsyncThunk(
  //   'words/fetchAll',
  //   async ({token, page, limit = 7}, thunkAPI) => {
  //     try {
        
  //           const response = await axios.get('/words/own', {params: {page, limit},
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },});
  //           return response.data;
        
        
  //     } catch (e) {
  //       return thunkAPI.rejectWithValue(e.message);
  //     }
  //   }
  // );


  export const fetchWords = createAsyncThunk(
    'words/fetchAll',
    async ({token, page, limit = 7, keyword, category}, thunkAPI) => {
      try {
        const params = { page, limit };
        if (keyword) params.keyword = keyword;
        if (category) params.category = category;
  
        const response = await axios.get('/words/own', {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
        
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );