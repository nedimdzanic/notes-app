import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
});

const store = configureStore({ reducer: notesSlice.reducer });

export const notesActions = notesSlice.actions;

export default store;
