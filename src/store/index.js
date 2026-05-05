import { configureStore } from "@reduxjs/toolkit";
import dealsReducer from "./slices/dealsSlice";

export const store = configureStore({
  reducer: {
    deals: dealsReducer,
  },
});