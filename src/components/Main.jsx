import React, { useRef } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './Home/Home';
import HeaderMedia from './HeaderMedia/HeaderMedia';
import ArrowUp from './ArrowUp/ArrowUp';
import Navigation from './Navigation/Navigation';
import Loading from './Loading';
import PageNotFound from './PageNotFound';
import Slider from './Slider/Slider';
import FitnessSolution from './FitnessSolution/FitnessSolution';
import Achievements from './Achievements/Achievements';
import BlockTitle from './BlockTitle/BlockTitle';
import Gallery from './Gallery/Gallery';
import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm';
import Footer from './Footer/Footer';

function Main({ props }) {
	// scroll={props.scrollHome}
	return (
		<main className="page" ref={props.pageRef}>
			<ArrowUp scroll={props.scrollHome} show={props.arrowUpShow} />
			<HeaderMedia props={props} />
			<Navigation props={props} disScroll={props.disableScroll} />

			<Routes>
				<Route path="/page-not-found" element={<PageNotFound />} />
				{/* <Route path='/thank' element={<Thank />} /> */}

				<Route
					exact
					path="/"
					element={
						<React.Suspense fallback={<Loading />}>
							<Home props={props} />
							<Slider props={props} />
							<BlockTitle
								text="FIND YOUR FITNESS"
								yellowText="SOLUTION"
								space={true}
							/>
							<FitnessSolution />
							<BlockTitle text="ACHIVE" yellowText="MENTS" />
							<Achievements />
							<BlockTitle text="OUR" yellowText="GALLERY" space={true} />
							<Gallery props={props} />
							<BlockTitle text="CONTACT" yellowText="FORM" space={true} />
							{/* <ContactForm /> */}
							<Contacts />
							{/* <Footer props={props} /> */}
						</React.Suspense>
					}
				/>

				<Route path="*" element={<Navigate to="/page-not-found" />} />
			</Routes>
		</main>
	);
}

export default Main;
