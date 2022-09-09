import { configureStore } from "@reduxjs/toolkit";
import addFoodItemReducer from "../features/addFoodItemSlice";

export const store = configureStore({
  reducer: {
    addFoodItem: addFoodItemReducer,
  },
});
