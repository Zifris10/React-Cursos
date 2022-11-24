import { useState, useEffect } from 'react';
import Message from './Message';

const SimpleForm = () => {

    const initialValues = {
        username: 'Lana Rhoade',
        email: 'eduardom362@gmail.com'
    };

    const [ formState, setFormState ] = useState(initialValues);

    const { username, email } = formState;

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type='text'
                className='form-control mb-3'
                placeholder='Username'
                name='username'
                value={username}
                onChange={handleInputChange}
            />
            <input
                type='text'
                className='form-control'
                placeholder='eduardom362@gmail.com'
                name='email'
                value={email}
                onChange={handleInputChange}
            />
            {
                username === 'Lana Rhoades' && <Message />
            }
        </>
    )
};

export default SimpleForm;
