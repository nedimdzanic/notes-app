import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { notesActions } from "../../store";

import classes from "./NoteModal.module.css";
import Button from "../UI/Button/Button";

const NotesModal = (props) => {
  const dispatch = useDispatch();
  const titleInputRef = useRef(props.title);
  const descInputRef = useRef(props.desc);
  const [error, setError] = useState(props.type === "create" ? true : false);

  const cancelHandler = () => props.onClickCancel();

  const onChangeHandler = () => {
    titleInputRef.current.value.trim().length < 1 ||
    descInputRef.current.value.trim().length < 1
      ? setError(true)
      : setError(false);
  };

  const submitHandler = () => {
    const title = titleInputRef.current.value,
      desc = descInputRef.current.value;

    if (props.type === "create") {
      dispatch(notesActions.filter("all"));
      dispatch(notesActions.search(""));
      dispatch(
        notesActions.addNew({
          title,
          desc,
        })
      );
    } else if (props.type === "edit") {
      dispatch(
        notesActions.update({
          id: props.id,
          title,
          desc,
        })
      );
    }

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
          <Button onClick={submitHandler} disabled={error}>
            {props.submitButton}
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
