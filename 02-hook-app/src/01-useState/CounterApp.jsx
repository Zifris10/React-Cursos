import { useState } from 'react';

const CounterApp = () => {

    const initialValues = {
        counter1: 10,
        counter2: 20,
        counter3: 30
    };

    const [ counter, setCounter ] = useState(initialValues);

    const { counter1, counter2, counter3 } = counter;

    const handleAddCounter = () => {
        setCounter({
            ...counter,
            counter1: counter1 + 1
        });
    };

    return (
        <>
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>
            <h1>Counter 3: {counter3}</h1>
            <hr />
            <button className='btn btn-primary' onClick={handleAddCounter}>+1</button>
        </>
    )
};

export default CounterApp;
