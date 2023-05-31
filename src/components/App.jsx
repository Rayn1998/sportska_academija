import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Main from './Main';
import '../pages/index.css';
import Popup from './Popup/Popup';

function App() {
	let initialWidth;
	let initialHome;
	(function() {
		window.innerWidth > 1000 ? (initialWidth = false) : (initialWidth = true);
		window.innerWidth > 500 ? (initialHome = true) : (initialHome = false);
	})();

	const [isPopupOpened, setrIsPopupOpened] = useState(false);
	const [isFormOpened, setFormOpened] = useState(false);
	const [currentLink, setCurrentLink] = useState('');
	const [currentTitle, setCurrentTitle] = useState('');
	const [shown, setShown] = useState(initialWidth);
	const [homeDelay, setHomeDelay] = useState(initialHome);
	const [arrowUpShow, setArrowUpShow] = useState(false);

	const [prevSrollPos, setPrevScrollPos] = useState(0);

	const imageRef = useRef();
	const pageRef = useRef();
	const swiperRef = useRef();
	const galleryRef = useRef();
	const homeRef = useRef();
	const contactsRef = useRef();

	const navigation = useNavigate();
	const location = useLocation();

	function handleArrowUp() {
		const currentScrollPos = window.pageYOffset;
		setArrowUpShow(
			(prevSrollPos > currentScrollPos &&
				prevSrollPos - currentScrollPos > 1000) ||
				currentScrollPos > 350,
		);
		setPrevScrollPos(currentScrollPos);
	}

	function menuTransform() {
		if (window.innerWidth < 1000) {
			setShown(true);
		} else {
			setShown(false);
		}
	}

	function homeIconDelay() {
		if (window.innerWidth > 500) {
			setHomeDelay(true);
		} else {
			setHomeDelay(false);
		}
	}

	function handleImgClick(e) {
		setrIsPopupOpened(true);
		disableScroll(true);
		imageRef.current = e.target;
	}

	useEffect(() => {
		window.addEventListener('resize', () => {
			menuTransform();
			homeIconDelay();
		});
		return () =>
			window.removeEventListener('resize', () => {
				menuTransform();
				homeIconDelay();
			});
	}, [menuTransform, homeIconDelay, shown, homeDelay]);

	useEffect(() => {
		window.addEventListener('scroll', handleArrowUp);
		return () => window.removeEventListener('scroll', handleArrowUp);
	}, [handleArrowUp, arrowUpShow, prevSrollPos]);

	function menuClick(e) {
		setShown(!shown);
	}

	function setLink(link) {
		setCurrentLink(link);
	}

	function handlePopupTrailer() {
		setrIsPopupOpened(!isPopupOpened);
		setArrowUpShow(false);
	}

	function closePopups() {
		setrIsPopupOpened(false);
		setFormOpened(false);
		setArrowUpShow(true);
		disableScroll(false);
	}

	function handleContactForm() {
		setFormOpened(!isFormOpened);
		setArrowUpShow(!arrowUpShow);
	}

	function scrollHome() {
		homeRef.current.scrollIntoView({
			behavior: 'smooth',
		});
	}

	function linkHome() {
		navigation('/');
	}

	function checkHome() {
		return location.pathname === '/';
	}

	const disableScroll = (state) => {
		state ? disableBodyScroll(pageRef) : enableBodyScroll(pageRef);
	};

	function scroll(ref) {
		ref.current.scrollIntoView({
			behavior: 'smooth',
		});
		setShown(true);
		if (window.innerWidth > 1000) {
			setTimeout(() => setShown(false), 500);
		}
	}

	function scrollSwiper() {
		if (checkHome()) {
			scroll(swiperRef);
		} else {
			linkHome();
			setTimeout(() => {
				scroll(swiperRef);
			}, 1000);
		}
	}

	function scrollGallery() {
		if (checkHome()) {
			scroll(galleryRef);
		} else {
			linkHome();
			setTimeout(() => {
				scroll(galleryRef);
			}, 1000);
		}
	}

	function scrollContacts() {
		if (checkHome()) {
			scroll(contactsRef);
		} else {
			linkHome();
			setTimeout(() => {
				scroll(contactsRef);
			}, 1000);
		}
	}

	function toOtherProjects() {
		navigation('/other-projects');
	}

	function toCurtainProject(path) {
		navigation(path);
	}

	useEffect(() => {
		function handleEscClose(e) {
			if (e.key === 'Escape') {
				closePopups();
			}
		}

		function handleOutOfBox(e) {
			if (e.target.classList.contains('popup__body')) {
				closePopups();
			}
		}

		if (isPopupOpened || isFormOpened) {
			document.addEventListener('keydown', handleEscClose);
			document.addEventListener('mousedown', handleOutOfBox);
			return () => {
				document.removeEventListener('keydown', handleEscClose);
				document.addEventListener('mousedown', handleOutOfBox);
			};
		}
	}, [isPopupOpened, isFormOpened]);

	return (
		<>
			<Main
				props={{
					handlePopupTrailer,
					setLink,
					homeRef,
					swiperRef,
					scrollSwiper,
					galleryRef,
					scrollGallery,
					contactsRef,
					scrollContacts,
					scrollHome,
					setCurrentTitle,
					linkHome,
					menuClick,
					shown,
					setShown,
					arrowUpShow,
					toOtherProjects,
					toCurtainProject,
					handleContactForm,
					homeDelay,
					disableScroll,
					pageRef,
					handleImgClick,
					imageRef,
				}}
			/>

			<Popup title={currentTitle} isOpen={isPopupOpened} onClose={closePopups}>
				<img
					className='popup__img'
					src={isPopupOpened ? imageRef.current.src : ''}
					alt='sport image'
				/>
			</Popup>

			<Popup
				isOpen={isFormOpened}
				onClose={closePopups}
				title='CONTACT WITH ME'
			>
			</Popup>
		</>
	);
}

export default App;
