import React from 'react'

const person = (props) => {
return (<div>
    <p>Person name {props.name} age: {props.age}!</p>
<p>{props.children}</p>
    </div>)
}
export default person