import Header from "./components/Header/Header";
import NotesList from "./components/Notes/NotesList";
import AddNew from "./components/Notes/AddNew";
import Filter from "./components/Filter/Filter";

const App = () => {
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
