import React from 'react';
import './ImageList.css';   

const ImageList = props => {
    
    const images = props.images.map(({id, urls, alt_description, description}) => {
        return (
            <div key={id}>
                <img src={urls.regular} alt={alt_description} />
                <p>{description}</p>
            </div>
        )
    });

    return (
        <div className='image-list'>{images}</div>
    )
};

export default ImageList;