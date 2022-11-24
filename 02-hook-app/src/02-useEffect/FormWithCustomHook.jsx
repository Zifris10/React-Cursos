import useForm from '../hooks/useForm';

const FormWithCustomHook = () => {

    const initialValues = {
        username: '',
        email: '',
        password: ''
    };
    const { formState, handleInputChange, handleResetForm } = useForm(initialValues);
    const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario con custom Hook</h1>
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
                className='form-control mb-3'
                placeholder='Email'
                name='email'
                value={email}
                onChange={handleInputChange}
            />
            <input
                type='password'
                className='form-control mb-3'
                placeholder='Contraseña'
                name='password'
                value={password}
                onChange={handleInputChange}
            />
            <button className='btn btn-primary' onClick={handleResetForm}>Borrar</button>
        </>
    )
};

export default FormWithCustomHook;
