import PropTypes from 'prop-types';
import { memo } from 'react';

const Small = memo(({
    counter
}) => {

    console.log('Me volvi a pitear')

    return (
        <small>{counter}</small>
    )
});

Small.propTypes = {
    counter: PropTypes.number.isRequired
};

export default Small;
