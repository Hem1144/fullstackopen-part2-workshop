function App({ notes }) {
  return (
    <>
      <h1>My Note</h1>
      <ul>
        <li>{notes.content}</li>
     </ul>
    </>
  );
}

export default App;
