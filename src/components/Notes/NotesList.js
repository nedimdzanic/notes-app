import { useSelector } from "react-redux";

import classes from "./NotesList.module.css";
import Pagination from "../UI/Pagination";

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  const notesState = useSelector((state) => state);

  localStorage.setItem("notes", JSON.stringify(notesState));

  let filteredNotes;
  if (notesState.filter === "favourites") {
    filteredNotes = notes.filter((note) => note.favourite);
  } else filteredNotes = notes;

  if (notesState.search !== "") {
    filteredNotes = filteredNotes.filter((note) =>
      note.title.toLowerCase().startsWith(notesState.search.toLowerCase())
    );
  }

  return (
    <section className={classes.container}>
      <Pagination itemsPerPage={8} items={filteredNotes} />
    </section>
  );
};

export default NotesList;
