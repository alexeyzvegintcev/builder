import React, { useEffect } from 'react'
import cssClasses from './Cocpit.module.css'

const Cocpit = (props) => {
    useEffect(() => {
        console.log('cocpit useEffect')
    setTimeout(()=>{alert("Boom")}, 1000)
    }, [])
    return (
        <div>
            <h1>Hello demo react</h1>
            <button className={cssClasses.Button} onClick={props.click}>Switch</button>
        </div>
    )
}
export default React.memo(Cocpit)