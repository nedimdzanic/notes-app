import { useDispatch } from "react-redux";
import { notesActions } from "./store";

import Header from "./components/Header/Header";
import NotesList from "./components/Notes/NotesList";
import AddNew from "./components/Notes/AddNew";
import Filter from "./components/Filter/Filter";

const App = () => {
  const dispatch = useDispatch();
  dispatch(notesActions.search(""));

  return (
    <>
      <Header />
      <AddNew />
      <Filter />
      <NotesList />
    </>
  );
};

export default App;
