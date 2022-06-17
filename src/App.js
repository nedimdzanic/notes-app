import Header from "./components/Header/Header";
import NotesList from "./components/Notes/NotesList";
import AddNew from "./components/Notes/AddNew";
import Filter from "./components/Filter/Filter";
import ExportAll from "./components/Notes/ExportAll";

const App = () => {
  return (
    <>
      <Header />
      <AddNew />
      <Filter />
      <NotesList />
      <ExportAll />
    </>
  );
};

export default App;
