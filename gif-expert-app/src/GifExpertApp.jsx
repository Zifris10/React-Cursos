import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([]);

    const handleAddCategory = (category) => {
        const findCategory = categories.find(item => item.toLowerCase() === category.toLowerCase());
        if(!findCategory) setCategories([category, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={handleAddCategory} />
            {
                categories.map(category => <GifGrid key={category} category={category} />)
            }
        </>
    )

};

export default GifExpertApp;
