import React, { useState } from 'react';

import AddCategory from '../Components/AddCategory';
import GifGrid from '../Components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['The Strokes']);

    const handleAdd = (category) => {
        setCategories([category, ...categories]);
    }
    
    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory handleAdd={ handleAdd }/>
            <hr/>

            <div>
                {
                    categories.map((category) => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    )) 
                }
            </div>
        </>
    );
}
 
export default GifExpertApp;