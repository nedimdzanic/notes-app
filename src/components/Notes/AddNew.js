import { useDispatch } from "react-redux";
import { notesActions } from "../../store";

import classes from "./NotesList.module.css";
import Button from "../UI/Button/Button";

const AddNew = () => {
  const dispatch = useDispatch();

  const addNewHandler = () => {
    dispatch(notesActions.filter("all"));
    dispatch(notesActions.search(""));
    dispatch(notesActions.addNew());
  };

  return (
    <div className={classes.center}>
      <Button onClick={addNewHandler}>Add new</Button>
    </div>
  );
};

export default AddNew;
