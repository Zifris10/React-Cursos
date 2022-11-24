import { useState } from 'react';

const useCounter = (initialValue = 10) => {

    const [ counter, setCounter ] = useState(initialValue);

    const valueAdd = 1;

    const increment = (value) => {
        setCounter(counter + (value || valueAdd));
    };

    const decrement = (value) => {
        console.log(value);
        if(counter > 0) {
            setCounter(counter - (value || valueAdd));
        }
    };

    const reset = () => {
        setCounter(initialValue);
    };

    return {
        counter,
        increment,
        decrement,
        reset
    };
};

export default useCounter;
