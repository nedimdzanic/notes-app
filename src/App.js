import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";
import Button from "./components/UI/Button";
import classes from "./components/Notes/Notes.module.css";

const App = () => {
  return (
    <>
      <Header />
      <Button className={classes.container}>Add new</Button>
      <Notes />
    </>
  );
};

export default App;
