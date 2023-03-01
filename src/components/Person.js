import React from 'react'

function Person({person}) {
    return (
        <div>
            <p>ID: {person.id}</p>
            <p>Name: {person.name}</p>
        </div>
    )
}

export default Person