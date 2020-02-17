import React, { Component, useState } from 'react';

import './App.css';
import Person from './Person/Person'
import NewPost from './Post/NewPost'

class App extends Component {
  state = {
    persons: [{ name: 'zveg', age: 29 }, { name: "jr", age: 3 }]
  }

  clickHandler = (name) => {
    this.setState({ persons: [{ name: name, age: 30 }, { name: "jr", age: 3 }] })
  }

  changeNameHandler = (event) => {
    this.setState({ persons: [{ name: event.target.value, age: 30 }, { name: "jr", age: 3 }] })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello demo react</h1>
        <button onClick={()=> {this.clickHandler("Alexey")}}>Switch</button>
        <Person change={this.changeNameHandler} click={this.clickHandler.bind(this, "Alxey Zveg")} name={this.state.persons[0].name} age={this.state.persons[0].age}>Test for child elemnet</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <NewPost></NewPost>
      </div>)

    //return React.createElement('div',{className: "App"}, React.createElement('h1',null,'Hello demo'))
  }
}

export default App;


 // const App = props => {
//   const [personState, setPersonState] = useState({
//     persons: [{ name: 'zveg', age: 29 }, { name: "jr", age: 3 }]
//   })
//   const [otherState, setOtherState] =useState("ffffffffffffffffffff")
//   console.log(personState)
//   console.log(otherState)
//   const clickHandler = () => {
//     setPersonState({ persons: [{ name: 'zveg', age: 30 }, { name: "jr", age: 3 }] })
//   }
//   return (
//     <div className="App">
//       <h1>Hello demo react</h1>
//       <button onClick={clickHandler}>Switch</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age}>Test for child elemnet</Person>
//       <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
//       <NewPost></NewPost>
//     </div>
//   )
// }