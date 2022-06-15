import Notes from "./Notes";
import classes from "./NotesList.module.css";

const NotesList = () => {
  return (
    <section className={classes.container}>
      <Notes />
    </section>
  );
};

export default NotesList;
