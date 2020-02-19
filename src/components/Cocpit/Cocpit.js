import React, { useEffect, useContext } from 'react'
import cssClasses from './Cocpit.module.css'
import AuthContext from '../../contexts/AuthContext'

const Cocpit = (props) => {
    const btnRef = React.useRef(null)
    const context = useContext(AuthContext)
    
    useEffect(() => {
        console.log('cocpit useEffect')
    //setTimeout(()=>{alert("Boom")}, 1000)
        btnRef.current.click()
}, [])
    return (
        <div>
            <h1>Hello demo react</h1>
            <button ref={btnRef} className={cssClasses.Button} onClick={props.click}>Switch</button>
            <button onClick={context.login}>Login</button>
            
        </div>
    )
}
export default React.memo(Cocpit)