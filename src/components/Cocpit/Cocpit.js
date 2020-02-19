import React, { useEffect } from 'react'
import cssClasses from './Cocpit.module.css'
import AuthContext from '../../contexts/AuthContext'

const Cocpit = (props) => {
    const btnRef = React.useRef(null)
    
    useEffect(() => {
        console.log('cocpit useEffect')
    //setTimeout(()=>{alert("Boom")}, 1000)
        btnRef.current.click()
}, [])
    return (
        <div>
            <h1>Hello demo react</h1>
            <button ref={btnRef} className={cssClasses.Button} onClick={props.click}>Switch</button>
            <AuthContext.Consumer>{(context)=>{return <button onClick={context.login}>Login</button>}}</AuthContext.Consumer>
            
        </div>
    )
}
export default React.memo(Cocpit)