import { useRef } from 'react';

const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    };

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                type='text'
                placeholder='Pon tu nombre'
                className='form-control'
                ref={inputRef}
            />
            <button
                className='btn btn-primary mt-3'
                onClick={onClick}
            >
                Set focus
            </button>
        </>
    )
};

export default FocusScreen;
