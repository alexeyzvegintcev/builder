import React from 'react'
import Person from './Person/Person'

const persons = (props) =>  {return props.persons.map((person, index) => {
        return <Person change={(event)=> props.change(event, person.id)} click={()=> props.click(index)} key={person.id} name={person.name} age={person.age}/>
      })}


export default persons