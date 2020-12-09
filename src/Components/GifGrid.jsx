import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);
    
    return (
        <div>
            <h3>{ category }</h3>
            { loading && <div className="loading"><img src="https://i.pinimg.com/originals/ed/23/68/ed23685339ada1b6d88008cbe1a11e98.gif" alt=""/></div> }
            <div className="card">
                { 
                    images.map(({ id, title, url }) => (
                        <GifGridItem 
                            key={ id }
                            item={ { title, url } }
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default GifGrid;
