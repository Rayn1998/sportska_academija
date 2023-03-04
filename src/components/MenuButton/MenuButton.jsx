import React from 'react';

import xButton from './images/x-mark.png';
import menuIcon from './images/dumbbell.png';

const MenuButton = ({props}) => {
	const {
		menuClick,
		shown
	} = props;
	return (
		<div
			className="menu__icon"
			onClick={menuClick}
			style={{
				transform: shown ? 'rotate(360deg)' : 'rotate(0)',
				transition: 'all 0.4s ease-in-out',
				backgroundImage: shown
					? `url(${menuIcon})`
					: `url(${xButton})`,
				backgroundSize: 'cover',
			}}
		></div>
	);
};

export default MenuButton;
