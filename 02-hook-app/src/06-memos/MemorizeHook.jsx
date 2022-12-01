import { useState, useMemo } from 'react';
import useCounter from '../hooks/useCounter';

const heavyStuff = (iterations) => {
    for(let i = 0; i < iterations; i++) {
        console.log('Se itero');
    }
    return `${iterations} se han realilzado.`
};

const MemorizeHook = () => {

    const { counter, increment } = useCounter(4000);
    const [ show, setShow ] = useState(true);
    const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <h4>{memorizeValue}</h4>
            <button
                className='btn btn-primary me-3'
                onClick={() => increment(1)}
            >
                +1
            </button>
            <button
                className='btn btn-danger'
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
};

export default MemorizeHook;
