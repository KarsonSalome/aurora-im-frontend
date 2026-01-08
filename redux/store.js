// store.js
"use client"; // Important to tell Next.js it's a client-side script

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage for web
import { combineReducers } from "redux";
import authReducer from "./authSlice"; // Your custom reducer for auth

// Redux persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Only persist the auth state
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production", // Enable Redux devTools in development
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ⚠ Disabling serializability check (not recommended)
    }),
});

// Create persistor, ensure it's initialized only on the client
export const persistor =
  typeof window !== "undefined" ? persistStore(store) : null;
