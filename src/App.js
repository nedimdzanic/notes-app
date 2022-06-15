import Header from "./components/Header/Header";
import NotesList from "./components/Notes/NotesList";
import AddNew from "./components/Notes/AddNew";

const App = () => {
  return (
    <>
      <Header />
      <AddNew />
      <NotesList />
    </>
  );
};

export default App;
