import PropTypes from 'prop-types';
import { memo } from 'react';

const Hijo = memo(({
    numero,
    incrementar
}) => {

    console.log('  Me volví a generar :(  ');
    
    return (
        <button
            className='btn btn-primary me-3'
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    )
});

Hijo.propTypes = {
    numero: PropTypes.number.isRequired,
    incrementar: PropTypes.func.isRequired
};

export default Hijo;
