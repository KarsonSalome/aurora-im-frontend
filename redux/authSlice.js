"use client";

// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Initial state for authentication
const initialState = {
  isAuth: false, // Default to not authenticated
  token: null,
  user: null,
};

// Create slice with reducers for login/logout actions
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = null;
      state.user = null;
    },
    updateUser: (state, action) => {
      state.user.avatar = action.payload.url;
    },
    rehydrate: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

// Export actions
export const { login, logout, updateUser, rehydrate } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
