import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
// import 'swiper/modules/pagination/pagination.min.css';

// Добавить текста
 
import img1 from './images/1.png';
import img2 from './images/2.jpg';
import img3 from './images/3.png';
import img4 from './images/4.jpg';

const Slider = ({props}) => {
	const { swiperRef } = props;
	const images = [img1, img2, img3, img4];

	return (
		<Swiper 
			modules={[Autoplay, Pagination,]}
			a11y
			className="slider" 
			slidesPerView={1}
			pagination={{clickable: true}}
			autoplay={{
				autoplay: true,
				delay: 3000,
				disableOnInteraction: false,
			}}
			loop
			ref = {swiperRef}
		>
			{images.map((img, i) => {
				return (
					<SwiperSlide key={i}>
						<img 
							className="slider__slide" 
							src={img} 
							alt={img}
						/>
						<p className="slider__slide-text"></p>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default Slider;
