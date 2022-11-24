import useCounter from '../hooks/useCounter';

const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(3);

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button className='btn btn-primary me-3' onClick={() => increment()}>+1</button>
            <button className='btn btn-primary me-3' onClick={reset}>Reset</button>
            <button className='btn btn-primary' onClick={() => decrement()}>-1</button>
        </>
    )
};

export default CounterWithCustomHook;
