import { createContext } from 'react'

const initialValue = {
    random: 'NOT SET',
    doSomething: () => {}
}

const myContext = createContext(initialValue)

export default myContext