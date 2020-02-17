import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [{name: 'zveg', age: 29}, {name: "jr", age: 3}]
  }
  render (){
    return (
    <div className="App">
<h1>Hello demo react</h1>
<Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Test for child elemnet</Person>
<Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
    </div>)
    
//return React.createElement('div',{className: "App"}, React.createElement('h1',null,'Hello demo'))
  }
}

export default App;
