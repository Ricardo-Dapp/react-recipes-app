import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const addFoodItemSlice = createSlice({
  name: "addFoodItem",
  initialState,
  reducers: {},
});

export const {} = addFoodItemSlice.actions;
export default addFoodItemSlice.reducer;
