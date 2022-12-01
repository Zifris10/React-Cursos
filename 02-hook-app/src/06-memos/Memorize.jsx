import { useState } from 'react';
import useCounter from '../hooks/useCounter'
import Small from './Small';

const Memorize = () => {

    const { counter, increment } = useCounter(1);
    const [ show, setShow ] = useState(true);

    return (
        <>
            <h1>Counter: <Small counter={counter} /></h1>
            <hr />
            <button
                className='btn btn-primary me-3'
                onClick={() => increment(2)}
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

export default Memorize;
