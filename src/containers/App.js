import React, { Component } from 'react'; // import component class
import classes from './App.css'; //imports css
import Persons from '../components/Persons/Persons'; //imports person component
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          clicked={this.togglePersonHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons} />
        {persons}
      </div>
    );
  }
}

// exports a higher order component
export default App;
