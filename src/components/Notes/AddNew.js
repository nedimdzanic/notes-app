import React, { useState } from "react";
import classes from "./NotesList.module.css";
import Button from "../UI/Button/Button";
import NoteModal from "./NoteModal";

const AddNew = () => {
  const [showed, showModal] = useState(false);

  const addNewHandler = () => showModal(true);

  const onCancelHandler = () => showModal(false);

  return (
    <>
      {showed && (
        <NoteModal
          type={"create"}
          onClickCancel={onCancelHandler}
          submitButton={"Create"}
        />
      )}
      <div className={classes.center}>
        <Button onClick={addNewHandler}>Add new</Button>
      </div>
    </>
  );
};

export default AddNew;
