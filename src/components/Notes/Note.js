import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { notesActions } from "../../store";

import classes from "./Note.module.css";
import NoteModal from "./NoteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { downloadJsonFile } from "../../utils";

const Notes = (props) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);

  const editHandler = () => {
    setEditable(true);
  };

  const deleteHandler = () => {
    dispatch(notesActions.delete(props.id));
  };

  const onCancelHandler = () => {
    setEditable(false);
  };

  const favouriteHandler = () => {
    dispatch(notesActions.favourite(props.id));
  };

  const exportHandler = () => {
    downloadJsonFile(props, props.title);
  };

  let favoriteClassnames = classes.favourite;
  if (props.favourite) favoriteClassnames += " " + classes.isFavourite;

  return (
    <>
      {editable && (
        <NoteModal
          type={"edit"}
          id={props.id}
          title={props.title}
          desc={props.desc}
          submitButton={"Save"}
          onClickCancel={onCancelHandler}
        />
      )}

      <div className={classes.card}>
        <FontAwesomeIcon
          icon={faStar}
          className={favoriteClassnames}
          onClick={favouriteHandler}
        />
        <h2>{props.title}</h2>
        <p className={classes.description}>{props.desc}</p>
        <div className={classes.modificationBox}>
          <div className={classes.date}>
            {props.date} <br /> {props.time}
            {props.edited && (
              <FontAwesomeIcon
                icon={faPenToSquare}
                className={classes.edited}
              />
            )}
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
              onClick={deleteHandler}
            />
            <FontAwesomeIcon
              className={classes.modificationIcon}
              icon={faFileArrowDown}
              onClick={exportHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
