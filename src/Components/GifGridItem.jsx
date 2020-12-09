import React from 'react';

const GifGridItem = ({ item }) => {
    const { title, url } = item;
    return (
        <div className="card-item animate__animated animate__zoomIn">
            <h4>{ title }</h4>
            <img src={ url } alt={ title }/> 
        </div>
    );
};

export default GifGridItem;
