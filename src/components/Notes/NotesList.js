import { useSelector } from "react-redux/es/exports";

import Note from "./Note";
import classes from "./NotesList.module.css";

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  const notesState = useSelector((state) => state);

  localStorage.setItem("notes", JSON.stringify(notesState));

  return (
    <section className={classes.container}>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          desc={note.desc}
          date={note.date}
          time={note.time}
          edited={note.edited}
        />
      ))}
    </section>
  );
};

export default NotesList;
