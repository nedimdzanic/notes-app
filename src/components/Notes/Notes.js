import classes from "./Notes.module.css";

const Notes = () => {
  return (
    <section className={classes.container}>
      <div className={classes.card}>
        <h2>Title 1</h2>
        <p className={classes.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className={classes.card}>
        <h2>Title 2</h2>
        <p className={classes.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className={classes.card}>
        <h2>Title 3</h2>
        <p className={classes.description}></p>
      </div>
    </section>
  );
};

export default Notes;
