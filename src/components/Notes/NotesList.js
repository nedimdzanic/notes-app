import { useSelector } from "react-redux";

import Note from "./Note";
import classes from "./NotesList.module.css";

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  const notesState = useSelector((state) => state);

  localStorage.setItem("notes", JSON.stringify(notesState));

  let filteredNotes;
  if (notesState.search !== "") {
    filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().startsWith(notesState.search.toLowerCase())
    );
  } else if (notesState.filter === "favourites") {
    filteredNotes = notes.filter((note) => note.favourite);
  } else filteredNotes = notes;

  return (
    <section className={classes.container}>
      {filteredNotes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          desc={note.desc}
          date={note.date}
          time={note.time}
          edited={note.edited}
          favourite={note.favourite}
        />
      ))}
    </section>
  );
};

export default NotesList;
