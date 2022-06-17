import { configureStore, createSlice } from "@reduxjs/toolkit";

const getDate = () => new Date().toLocaleDateString();
const getTime = () => new Date().toLocaleTimeString();

let notes = [],
  initialState = {};

if (JSON.parse(localStorage.getItem("notes"))) {
  initialState = JSON.parse(localStorage.getItem("notes"));
} else {
  initialState = {
    notes,
    nextId: 0,
    filter: "all",
    search: "",
  };
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
        edited: false,
        favourite: false,
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
      state.notes[index].edited = true;
    },
    delete(state, action) {
      //find index of note by id
      const index = state.notes.findIndex((obj) => obj.id === action.payload);

      state.notes.splice(index, 1);
    },
    favourite(state, action) {
      //find index of note by id
      const index = state.notes.findIndex((obj) => obj.id === action.payload);

      state.notes[index].favourite = !state.notes[index].favourite;
    },
    filter(state, action) {
      state.filter = action.payload;
    },
    search(state, action) {
      state.search = action.payload;
    },
  },
});

const store = configureStore({ reducer: notesSlice.reducer });

export const notesActions = notesSlice.actions;

export default store;
