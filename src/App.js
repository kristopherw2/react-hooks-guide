import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

const app = (props) => {
  const [ personsState, setPersonsState] = useState({
      persons: [
          { name: "Kris", age: 35 },
          { name: "Krys", age: 31 },
          { name: "Babs", age: 31 }
      ],
    });

    const [otherState, setOtherState] = useState('some other value')

    console.log(personsState, otherState)

    const switchNameHandler = () => {
        // console.log("Was clicked!")
        setPersonsState({
            persons: [
                { name: "Kristopher", age: 35 },
                { name: "Krys", age: 33 },
                { name: "Babs", age: 31 },
            ],
            otherState: personsState.otherState
        });
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
            >
                My Hobbies: Racing
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            />
        </div>
    );
};

export default app;

//  state = {
        
//     };
