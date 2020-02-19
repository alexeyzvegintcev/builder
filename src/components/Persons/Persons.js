import React from 'react'
import Person from './Person/Person'
import PropTypes from 'prop-types'

class Persons extends React.PureComponent {
    static getDerivedStateFromProps(props, state){
        console.log(' Persons: getDerivedStateFromProps')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Persons:  shouldComponentUpdate')
        return (nextProps.persons !== this.props.persons)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Persons:  getSnapshotBeforeUpdate')
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Persons componentDidUpdate")
    }
    render() {
        return this.props.persons.map((person, index) => {
            return <Person change={(event) => this.props.change(event, person.id)} click={() => this.props.click(index)} key={person.id} name={person.name} age={person.age} />
        })
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}
export default Persons