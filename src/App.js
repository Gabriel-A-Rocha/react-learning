import React, { useState } from "react";
import "./App.css";

import Person from "./Person/Person";

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {
        id: "9sd7f89sdf",
        name: "José",
        age: 30,
      },
      {
        id: "sdf0987sdfds",
        name: "Paula",
        age: 22,
      },
      {
        id: "klj23lkj23l",
        name: "Júlio",
        age: 35,
      },
    ],
    showPersons: false,
  });

  const nameChangedHandler = (evt, id) => {
    const personIndex = personsState.persons.findIndex((p) => p.id === id);
    const newState = { ...personsState };
    newState.persons[personIndex].name = evt.target.value;
    setPersonsState(newState);
  };

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      ...personsState,
      showPersons: !doesShow,
    });
  };

  const deletePersonHandler = (personId) => {
    const newPersonsArray = personsState.persons.filter(
      (p) => p.id !== personId
    );
    setPersonsState((prev) => ({
      ...prev,
      persons: newPersonsArray,
    }));
  };

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#074918",
    },
  };

  if (personsState.showPersons) {
    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "#7f1114",
    };
  } else {
    style.backgroundColor = "green";
  }

  let classes = [];
  if (personsState.persons.length <= 2) {
    classes.push("red");
    if (personsState.persons.length <= 1) {
      classes.push("bold");
    }
  }

  return (
    <div className="App">
      <p className={classes.join(" ")}>Please introduce yourself:</p>

      <button style={style} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>

      {personsState.showPersons && (
        <div>
          {personsState.persons.map((person) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              changed={(evt) => nameChangedHandler(evt, person.id)}
              deleteHandler={() => deletePersonHandler(person.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
