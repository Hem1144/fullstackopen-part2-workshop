import { useState, useEffect } from "react";
import Note from "./components/Note";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("Do Coder");
    let tryAxios = axios.get("http://localhost:3001/persons");
    tryAxios.then((res) => {
      console.dir(res.data);
      setNotes(res.data);
      console.log("Returning Promise");
    });
    console.log(tryAxios);
  }, []);

  const notesToShow = notes.filter((note) => (showAll ? true : note.important));

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes(
      notes.concat({
        tech: newNote,
        id: notes.length + 1,
        important: Math.random() > 0.5,
      })
    );
    setNewNote(" ");
    console.log("form has been submitted");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((value) => {
          return <Note key={value.id} note={value} />;
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default App;
