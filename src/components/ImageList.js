import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    
    const images = props.images.map((image) => {
        return <ImageCard image={image} key={image.id} alt={image.alt_description} />
    });

    return (
        <div className='image-list'>{images}</div>
    )
};

export default ImageList;