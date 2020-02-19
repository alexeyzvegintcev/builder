import React from 'react'

const authContext = React.createContext({
    authed: false,
    login: () => {}
})

export default authContext