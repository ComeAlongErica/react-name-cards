import React from 'react';
import classes from "./Cockpit.css"

const cockpit = (props) => {
    // assign css classes
    const assignedClasses = []
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(" ")}>Click the sentences in the cards to see me change! Woohoo!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;