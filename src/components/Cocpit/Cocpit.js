import React from 'react'
import cssClasses from './Cocpit.module.css'

const cocpit  = (props) =>{
    return(
        <div>
        <h1>Hello demo react</h1>
        <button className={cssClasses.Button} onClick={props.click}>Switch</button>
        </div>
    )
}
export default cocpit