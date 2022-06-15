import Header from "./components/Header/Header";
import NotesList from "./components/Notes/NotesList";
import Button from "./components/UI/Button";
import classes from "./components/Notes/NotesList.module.css";

const App = () => {
  return (
    <>
      <Header />
      <Button className={classes.container}>Add new</Button>
      <NotesList />
    </>
  );
};

export default App;
