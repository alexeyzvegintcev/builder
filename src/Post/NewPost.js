import React, {Component} from 'react'

export default class NewPost extends Component{
    state = {
        counter: 1
    }

    render(){
        return(
            <div>{this.state.counter}</div>
        )
    }
}