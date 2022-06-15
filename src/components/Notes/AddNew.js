import { useDispatch } from "react-redux";
import { notesActions } from "../../store";

import classes from "./NotesList.module.css";
import Button from "../UI/Button";

const AddNew = () => {
  const dispatch = useDispatch();

  const addNewHandler = () => {
    dispatch(notesActions.addNew());
  };

  return (
    <div className={classes.container}>
      <Button onClick={addNewHandler}>Add new</Button>
    </div>
  );
};

export default AddNew;
