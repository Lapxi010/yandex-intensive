import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { categorySlice } from "./category";
import {booksSlice} from "./books";
import {reviewsSlice} from "./reviews";
import {basketSlice} from "./basket";

export const store = configureStore({
  reducer: combineReducers({
    category: categorySlice.reducer,
    books: booksSlice.reducer,
    reviews: reviewsSlice.reducer,
    basket: basketSlice.reducer
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

