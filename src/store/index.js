import { configureStore, createSlice } from "@reduxjs/toolkit";

const getDate = () => new Date().toLocaleDateString();
const getTime = () => new Date().toLocaleTimeString();

let notes = [],
  initialState = {};

if (JSON.parse(localStorage.getItem("notes"))) {
  initialState = JSON.parse(localStorage.getItem("notes"));
} else {
  initialState = { notes, nextId: 0 };
}

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNew(state) {
      const newNotes = {
        id: state.nextId,
        title: `New note`,
        desc: "Change note description...",
        date: getDate(),
        time: getTime(),
      };
      state.notes.push(newNotes);
      state.nextId++;
    },
    update(state, action) {
      //find index of note by id
      const index = state.notes.findIndex(
        (obj) => obj.id === action.payload.id
      );

      state.notes[index].title = action.payload.newTitle;
      state.notes[index].desc = action.payload.newDesc;
      state.notes[index].date = getDate();
      state.notes[index].time = getTime();
    },
  },
});

const store = configureStore({ reducer: notesSlice.reducer });

export const notesActions = notesSlice.actions;

export default store;
