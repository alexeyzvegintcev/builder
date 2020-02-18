import React from 'react'
import './Person.css'
import Aux from '../../../hoc/Aux'

 class Person extends React.Component{
    render(){
        console.log("Person rendering")
        return (<React.Fragment  className="Person" >
        <p onClick={this.props.click} >Person name {this.props.name} age: {this.props.age}!</p>
            <p>{this.props.children}</p>
            <input type='text' onChange={this.props.change} value={this.props.name}/>
        </React.Fragment>)
    }

}
export default Person