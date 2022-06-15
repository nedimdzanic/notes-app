import classes from "./NotesList.module.css";
import Button from "../UI/Button";

const AddNew = () => {
  return (
    <div className={classes.container}>
      <Button>Add new</Button>
    </div>
  );
};

export default AddNew;
