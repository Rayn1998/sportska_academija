import React, { useRef } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Home from './Home/Home';
import HeaderMedia from './HeaderMedia/HeaderMedia';
import ArrowUp from './ArrowUp/ArrowUp';
import Navigation from './Navigation/Navigation';
import Loading from './Loading';
import PageNotFound from './PageNotFound';
// import Thank from './Thank';
import Slider from './Slider/Slider';
import FitnessSolution from './FitnessSolution/FitnessSolution';
import Achievements from './Achievements/Achievements';
import BlockTitle from './BlockTitle/BlockTitle';
import Gallery from './Gallery/Gallery';

function Main({ props }) {
	const ref = useRef()
	const disableScroll = (state) => {
		state ? disableBodyScroll(ref) : enableBodyScroll(ref);
	}
	// scroll={props.scrollHome}
	return (
		<main className="page" ref={ref}>
			<ArrowUp scroll={props.scrollHome} show={props.arrowUpShow} />
			<HeaderMedia props={props} />
			<Navigation props={props} disScroll={disableScroll} />

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
							/>
							<FitnessSolution />
							<BlockTitle text="ACHIVE" yellowText="MENTS" />
							<Achievements />
							<BlockTitle text="OUR" yellowText="GALLERY" />
							<Gallery props={props} />
							<BlockTitle text="CONTACT" yellowText="FORM" />
						</React.Suspense>
					}
				/>

				<Route path="*" element={<Navigate to="/page-not-found" />} />
			</Routes>
		</main>
	);
}

export default Main;
