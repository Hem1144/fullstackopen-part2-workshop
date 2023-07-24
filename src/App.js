import Refactor from "./components/Refactor";

function App({ notes }) {
  return (
    <>
      <h1>My Note</h1>
      <Refactor notes={notes} />
    </>
  );
}

export default App;
