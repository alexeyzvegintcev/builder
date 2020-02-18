import React, { Component } from 'react';
import cssClasses from './App.module.css';
import Person from '../components/Persons/Person/Person'
import NewPost from '../components/Post/NewPost'
import Persons from '../components/Persons/Persons'
import Cocpit from '../components/Cocpit/Cocpit';

class App extends Component {
  
  state = {
    persons: [{ id: 'qwe1', name: 'zveg', age: 29 }, {id: 'qwe2', name: "jr", age: 3 }],
    showPersons: false
  }

  clickHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({persons: persons})
  }

  changeName = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === personId
    })
    const persons = [...this.state.persons]
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value
    persons[personIndex] = person
    this.setState({persons: persons})
  }

  
  render() {
    

    let persons = null
    if (this.state.showPersons){
      // style.background = 'red'
      // style[':hover'] ={
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      persons = (<div><Persons 
      persons={this.state.persons} 
      change={this.changeName} 
      click={this.deletePersonHandler}/>
      </div>)
    }

    const classes = ()=> {
      return ["red", "bold"].join(' ')
    }
    return (

      <div className={cssClasses.App}>
        <Cocpit click={this.clickHandler}/>
        {persons}
        <p className={classes()}>test text</p>
        <NewPost></NewPost>
      </div>
)

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