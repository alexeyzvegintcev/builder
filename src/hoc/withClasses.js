import React from 'react'

const withClasses = (WrappedComponent, classes) =>{
    return props => <div className={classes}><WrappedComponent {...props}/></div>
}

export default withClasses