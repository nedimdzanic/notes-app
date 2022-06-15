import { configureStore, createSlice } from "@reduxjs/toolkit";

let notes = [];

const initialState = { notes, nextId: 0 };

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNew(state) {
      const date = new Date().toLocaleDateString(),
        time = new Date().toLocaleTimeString();

      const newNotes = {
        id: state.nextId,
        title: `New note`,
        desc: "Change note description...",
        date: date,
        time: time,
      };
      state.notes.push(newNotes);
      state.nextId++;
    },
  },
});

const store = configureStore({ reducer: notesSlice.reducer });

export const notesActions = notesSlice.actions;

export default store;
