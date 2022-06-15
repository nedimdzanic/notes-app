import React, { useRef } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { notesActions } from "../../store";

import classes from "./NoteModal.module.css";
import Button from "../UI/Button";

const NotesModal = (props) => {
  const dispatch = useDispatch();
  const titleInputRef = useRef(props.title);
  const descInputRef = useRef(props.desc);

  const cancelHandler = () => {
    props.onClickCancel();
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
        />
        <textarea
          className={classes.description}
          ref={descInputRef}
          defaultValue={props.desc}
        ></textarea>
        <div className={classes.buttons}>
          <Button onClick={saveHandler}>Save</Button>
          <Button className={classes.cancel} onClick={cancelHandler}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotesModal;
