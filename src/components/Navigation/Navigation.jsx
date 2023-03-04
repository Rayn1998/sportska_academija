import React from 'react';
import MenuButton from '../MenuButton/MenuButton';

const Navigation = ({ props }) => {
	const {
		scrollWorks,
		scrollShowreels,
		scrollContacts,
		toOtherProjects,
		homeRef,
		linkHome,
		menuClick,
		shown,
		homeDelay,
	} = props;

	return (
		<nav className="navigation" ref={homeRef}>
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
					transition: 'transform 0.3s ease-in-out',
				}}
			>
				<li className="navigation__menu-item" onClick={scrollWorks}>
					Latest works
				</li>
				<li className="navigation__menu-item" onClick={scrollShowreels}>
					Showreels
				</li>
				<li className="navigation__menu-item" onClick={scrollContacts}>
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
