import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  id: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        const { name, email } = action.payload;
        state.user = { name, email };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const { name, email } = action.payload;
        state.user = { name, email };
        state.token = action.payload.token;
        state.id = action.payload._id;
        state.isLoggedIn = true;
      })
      .addCase(logOut.pending, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        const { name, email } = action.payload;
        state.user = { name, email };
        state.id = action.payload._id;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.token = action.payload.token;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
