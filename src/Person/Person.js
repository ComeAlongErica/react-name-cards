import React from 'react'; // we are not extending a component so you don't need to import component
import './Person.css';
import Radium from 'radium'; //for styling


const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}> I'm a {props.name} and I am {props.age} years old!!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        )
};

export default Radium(person);