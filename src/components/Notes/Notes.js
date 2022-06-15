import classes from "./Notes.module.css";

const Notes = (props) => {
  return (
    <>
      <div className={classes.card}>
        <h2>{props.title}</h2>
        <p className={classes.description}>{props.desc}</p>
      </div>
    </>
  );
};

export default Notes;
