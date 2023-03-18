import React from "react";

// import img1 from './images/gal_1.png'
// import img2 from './images/gal_2.png'
// import img3 from './images/gal_3.png'
// import img4 from './images/gal_4.png'
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpeg";

const Gallery = ({ props }) => {
    const images = [img1, img2, img3, img4];
    const { galleryRef } = props;
    return (
        <div className="gallery" ref={galleryRef}>
            {images.map((img, i) => {
                return (
                    <img
                        className={`gallery__image grid-image${i + 1}`}
                        src={img}
                        key={i}
                        alt={img}
                        ref={props.imageRef}
                        onClick={props.handleImgClick}
                    />
                );
            })}
        </div>
    );
};

export default Gallery;
