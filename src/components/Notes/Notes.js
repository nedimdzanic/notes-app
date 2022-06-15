import classes from "./Notes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Notes = (props) => {
  return (
    <>
      <div className={classes.card}>
        <h2>{props.title}</h2>
        <p className={classes.description}>{props.desc}</p>
        <div className={classes.modificationBox}>
          <div className={classes.date}>
            {props.date} <br /> {props.time}
          </div>
          <div className={classes.right}>
            <FontAwesomeIcon
              className={classes.modificationIcon}
              icon={faPenToSquare}
            />
            <FontAwesomeIcon
              className={classes.modificationIcon}
              icon={faTrashCan}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
