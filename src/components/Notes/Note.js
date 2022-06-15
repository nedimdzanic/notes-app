import React, { useState } from "react";

import classes from "./Note.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import NoteModal from "./NoteModal";

const Notes = (props) => {
  const [editable, setEditable] = useState(false);

  const editHandler = () => {
    setEditable(true);
  };

  const onCancelHandler = () => {
    setEditable(false);
  };

  return (
    <>
      {editable && (
        <NoteModal
          id={props.id}
          title={props.title}
          desc={props.desc}
          onClickCancel={onCancelHandler}
        />
      )}

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
              onClick={editHandler}
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
