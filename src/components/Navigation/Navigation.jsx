import React, { useState, useEffect } from 'react';
import MenuButton from '../MenuButton/MenuButton';

const Navigation = ({ props, disScroll }) => {
	const {
		// scrollWorks,
		// scrollShowreels,
		// scrollContacts,
		scrollSwiper,
		scrollGallery,
		toOtherProjects,
		linkHome,
		menuClick,
		shown,
		homeDelay,
	} = props;
	const [menuHide, setMenuHide] = useState(false);

	function hideMenu() {
		window.scrollY > 200 ? setMenuHide(true) : setMenuHide(false);
	}
	
	if (window.innerWidth > 1000) {
		disScroll(shown);
	} else {
		disScroll(!shown);
	}

	useEffect(() => {
		window.addEventListener('scroll', hideMenu);
		return () => {
			window.removeEventListener('scroll', hideMenu);
		};
	}, [menuHide]);
	// ref={homeRef}
	return (
		<nav className="navigation" >
			<MenuButton props={{ menuClick, shown }} />
			<div
				className="navigation__home-icon"
				onClick={linkHome}
				style={{
					visibility: homeDelay ? 'visible' : 'hidden',
					opacity: homeDelay ? 1 : 0,
					transition: 'all 0.3s ease-in-out',
				}}
			></div>
			<ul
				className="navigation__menu"
				style={{
					transform: shown ? 'translateX(1400px)' : 'translateX(0)',
					translate: menuHide ? '0px -1000px' : '0 0',
					transition: 'all 0.3s ease-in-out',
				}}
			>
				<li className="navigation__menu-item" onClick={scrollSwiper}>
					Gym today
				</li>
				<li className="navigation__menu-item" onClick={scrollGallery}>
					Gallery
				</li>
				<li className="navigation__menu-item" >
					Contacts
				</li>
				<li className="navigation__menu-item" onClick={toOtherProjects}>
					Other projects
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
