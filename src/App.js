import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium'
import './App.css';
import Person from './Person/Person'
import NewPost from './Post/NewPost'

class App extends Component {
  state = {
    persons: [{ id: 'qwe1', name: 'zveg', age: 29 }, {id: 'qwe2', name: "jr", age: 3 }],
    showPersons: false
  }

  clickHandler = (name) => {
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
    const style={
      backgroundColor: 'green',
      color: 'white',
      fontWeight: 'bold',
      ':hover': {
        backgroundColor: 'lightgreen'
      }
    }
    let persons = null
    if (this.state.showPersons){
      style.backgroundColor = 'red'
      style[':hover'] ={
        backgroundColor: 'salmon',
        color: 'black'
      }
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person change={(event)=> this.changeName(event, person.id)} click={()=> this.deletePersonHandler(index)} key={person.id} name={person.name} age={person.age}/>
        })}
        
      </div>)
    }

    const classes = ()=> {
      return ["red", "bold"].join(' ')
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1>Hello demo react</h1>
        <button style={style} onClick={() => { this.clickHandler("Alexey") }}>Switch</button>
        {persons}
        <p className={classes()}>test text</p>
        <NewPost></NewPost>
      </div>
      </StyleRoot>)

    //return React.createElement('div',{className: "App"}, React.createElement('h1',null,'Hello demo'))
  }
}

export default Radium(App);


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