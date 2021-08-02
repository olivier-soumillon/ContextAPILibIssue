import React from 'react'
import myContext from './myContext'
import useMyContext from '../hooks/useMyContext'

const MyProvider = ({ children }) => {
    const value = useMyContext()

    console.log('MyLib :: MyProvider :: value', value)

    return (
        <myContext.Provider value={value}>
            { children }
        </myContext.Provider>
    )
}

export default MyProvider