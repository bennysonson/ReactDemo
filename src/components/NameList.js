import React from 'react'
import Person from './Person.js'

function NameList() {
    const names = ['Benson', 'Benny', 'BennyBoo']
    const people = [
        {
            id: 1,
            name: 'Benson',
        },
        {
            id: 2,
            name: 'Benny',
        },
        {
            id: 3,
            name: 'BennyBoo',
        }
    ];
    const personList = people.map(person =>
        <Person key={person.id} person={person}></Person>
    );
    const namesList = names.map((name, index) => <h2 key={index}>Index: {index} {name}</h2>);
    return (
        <div>
            {namesList}
        </div>
    )
}

export default NameList