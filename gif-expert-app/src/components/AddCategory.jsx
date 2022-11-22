import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({
    onNewCategory
}) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const valueTrim = inputValue.trim();
        if(valueTrim) {
            onNewCategory(valueTrim);
            setInputValue('');
        }
    };

    return (
        <form aria-label='form-gifs' onSubmit={handleSubmit}>
            <input type='text' placeholder='Buscar gifs' value={inputValue} onChange={handleInputChange} />
        </form>
    )

};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};

export default AddCategory;
