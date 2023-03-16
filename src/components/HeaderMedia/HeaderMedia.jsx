import React from 'react';

import media_bg from '../../images/home_bg.png';

const HeaderMedia = ({props}) => {
	return (
		<div className="header-media" ref={props.homeRef}>
			<img className="header-media__src" src={media_bg}></img>
		</div>
	);
};

export default HeaderMedia;
