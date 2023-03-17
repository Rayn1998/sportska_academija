import React, { useState, useEffect } from 'react';
import MenuButton from '../MenuButton/MenuButton';

const Navigation = ({ props, disScroll }) => {
	const {
		scrollSwiper,
		scrollGallery,
        scrollContacts,
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

	useEffect(() => {
		if (window.innerWidth < 1000) {
			shown ? disScroll(false) : disScroll(true);
		}
	}, [shown])

	useEffect(() => {
		window.addEventListener('scroll', hideMenu);
		return () => {
			window.removeEventListener('scroll', hideMenu);
		};
	}, [menuHide]);
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
				<li className="navigation__menu-item" onClick={scrollContacts} >
					Contacts
				</li>
				<li className="navigation__menu-item" onClick={toOtherProjects}>
					Something Other
				</li>
				<li className="navigation__contact-btn" style={{
					visibility: window.innerWidth < 1000 ? "visible" : "hidden",
					display: window.innerWidth < 1000 ? "block" : "none",
				}}
                 onClick={scrollContacts}
                >
					CONTACT NOW
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
