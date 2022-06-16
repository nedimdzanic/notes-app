import { useSelector } from "react-redux/es/exports";

import Note from "./Note";
import classes from "./NotesList.module.css";

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  const notesState = useSelector((state) => state);

  localStorage.setItem("notes", JSON.stringify(notesState));

  return (
    <section className={classes.container}>
      {notes.map((x) => (
        <Note
          key={x.id}
          id={x.id}
          title={x.title}
          desc={x.desc}
          date={x.date}
          time={x.time}
        />
      ))}
    </section>
  );
};

export default NotesList;
