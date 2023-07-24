import React from "react";

const Refactor = ({ notes }) => {
  return (
    <div>
      <ul>
        {notes.map((val) => {
          return <li key={val.id}>{val.tech}</li>;
        })}
      </ul>
    </div>
  );
};

export default Refactor;
