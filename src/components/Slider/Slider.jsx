import React, { useState } from 'react';

import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';

const Slider = () => {

    let [transf, setTransf] = useState(1440);

	const images = [img1, img2, img3, img4];
	function clickRight() {
        setTransf(transf+=1440);
    }

	return (
		<div className="slider">
			{images.map((img, i) => {
				transf = i * 1440;
				return (
					<img
						className="slider__slide"
						src={img}
						alt={img}
						key={i}
						style={{
							translate: `${transf}px`,
						}}
					/>
				);
			})}
			<div className="slider__btn-left"></div>
			<div className="slider__btn-right" onClick={clickRight}></div>
		</div>
	);
};

export default Slider;
