import React from 'react'
import './Person.css'
import Aux from '../../../hoc/Aux'
import AuthContext from '../../../contexts/AuthContext'

 class Person extends React.Component{
     static contextType = AuthContext
     constructor(props){
         super(props)
         this.inputElRef = React.createRef()
     }
     componentDidMount(){
         this.inputElRef.current.focus()
     }
    render(){
        console.log("Person rendering")
        return (<React.Fragment >
        <p onClick={this.props.click} >Person name {this.props.name} age: {this.props.age}!</p>
            <p>{this.context.authed ? 'Authed': "Please login"}</p>
            <p>{this.props.children}</p>
            <input type='text' 
            //ref={(inputEl)=> {inputEl.focus()}} 
            ref={this.inputElRef}
            onChange={this.props.change} value={this.props.name}/>
        </React.Fragment>)
    }

}
export default Person