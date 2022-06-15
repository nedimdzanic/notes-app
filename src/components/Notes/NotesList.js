import { useSelector } from "react-redux/es/exports";

import Notes from "./Notes";
import classes from "./NotesList.module.css";

const NotesList = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <section className={classes.container}>
      {notes.map((x) => (
        <Notes
          key={x.id}
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
