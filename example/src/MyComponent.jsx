
import { useContext, useEffect } from 'react';
//import { myContext } from 'mylib/dist/components'
import { myContext } from 'mylib/dist/contexts'

const MyComponent = () => {
    const { random, doSomething } = useContext(myContext)

    useEffect(() => {
        doSomething()
    }, [doSomething])

    return (
        <span>{ random }</span>
    )
}

export default MyComponent;
