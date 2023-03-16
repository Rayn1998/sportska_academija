import React from 'react';

import img1 from './images/gal_1.png'
import img2 from './images/gal_2.png'
import img3 from './images/gal_3.png'
import img4 from './images/gal_4.png'

const Gallery = ({props}) => {
    const { galleryRef } = props;
    return (
        <div className="gallery" ref={galleryRef}>
            <img className="gallery__image grid-image1" src={img1} alt="img_1" />
            <img className="gallery__image grid-image2" src={img2} alt="img_2" />
            <img className="gallery__image grid-image3" src={img3} alt="img_3" />
            <img className="gallery__image grid-image4" src={img4} alt="img_4" />
        </div>
    );
}

export default Gallery;
