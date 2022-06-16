import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { notesActions } from "../../store";

import classes from "./NoteModal.module.css";
import Button from "../UI/Button";

const NotesModal = (props) => {
  const dispatch = useDispatch();
  const titleInputRef = useRef(props.title);
  const descInputRef = useRef(props.desc);
  const [error, setError] = useState(false);

  const cancelHandler = () => {
    props.onClickCancel();
  };

  const onChangeHandler = () => {
    titleInputRef.current.value.trim().length < 1 ||
    descInputRef.current.value.trim().length < 1
      ? setError(true)
      : setError(false);
  };

  const saveHandler = () => {
    dispatch(
      notesActions.update({
        id: props.id,
        newTitle: titleInputRef.current.value,
        newDesc: descInputRef.current.value,
      })
    );
    props.onClickCancel();
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.modalContainer}>
        <input
          className={classes.title}
          type="text"
          ref={titleInputRef}
          defaultValue={props.title}
          onChange={onChangeHandler}
          placeholder={"Title"}
        />
        <textarea
          className={classes.description}
          ref={descInputRef}
          defaultValue={props.desc}
          onChange={onChangeHandler}
          placeholder={"Description"}
        ></textarea>
        <div className={classes.buttons}>
          <Button onClick={saveHandler} disabled={error}>
            Save
          </Button>
          <Button className={classes.cancel} onClick={cancelHandler}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotesModal;
