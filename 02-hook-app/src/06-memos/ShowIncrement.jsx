import PropTypes from 'prop-types';
import { memo } from 'react';

const ShowIncrement = memo(({
    increment
}) => {

    console.log('Me genere')

    return (
        <button
            className='btn btn-primary'
            onClick={() => {
                increment(5)
            }}
        >
            Incrementar
        </button>
    )
});

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
};

export default ShowIncrement;
