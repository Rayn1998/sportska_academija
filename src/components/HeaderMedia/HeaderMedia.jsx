import React from 'react';

import media_bg from '../../images/home_bg.png';

const HeaderMedia = () => {
	return (
		<div className="header-media">
			<img className="header-media__src" src={media_bg}></img>
		</div>
	);
};

export default HeaderMedia;
