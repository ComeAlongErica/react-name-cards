import React, { Component } from 'react'; // import component class
import './App.css'; //imports css
import Person from './Person/Person.js' //imports person component
import Radium, { StyleRoot } from 'radium'; //for styling

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Erica", age: 28 },
      { id: 2, name: "Drew", age: 27 },
      { id: 3, name: "Ella", age: 8 },
    ],
    otherPersons: [
      { name: "Wow", age: 28 },
      { name: "Huh", age: 27 },
      { name: "2", age: 8 },
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    // method executed for every object in the array
    const personIndex = this.state.persons.findIndex(obj => {
      //return base on if the person is true or false for who I'm looking for
      return obj.id === id;
    });

    // use spread operator to not mutate the original obj
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  //deletes person from array
  deletePersonHandler = (personIndex) => {
    //create copy of state, edit copy, then use setState() to update
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  //shows persons conditionally
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  // needs render method to render to screen
  render() {

    //styling with javascript, bound as an attribute on the button
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid gold",
      borderRadius: "10px",
      cursor: "pointer",
      padding: "10px",
      backgroundColor: "gold",
      color: "white",
      transition: ".3s ease-in-out",
      // wrap psuedo in quotes, import radium to do, put values in an object
      ':hover': {
        backgroundColor: "white",
        color: "gold"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      );

      //conditionally change style with vanilla javascript
      style.backgroundColor = "white";
      style.color = "gold";
      // radium feature below
      style[':hover'] = {
        backgroundColor: "gold",
        color: "white"
      }
    }


    // assign css classes
    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ["red","bold"]
    }

    return (
      // wrap app in StyleRoot (imported from Radium) to apply media queries and other advanced CSS features
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(" ")}>This is working! Woohoo!</p>
          <button
            style={style}
            onClick={this.togglePersonHandler}>Toggle Persons</button>

          {persons}
        </div>
      </StyleRoot>
    );
  }
}

// exports a higher order component
export default Radium(App);
