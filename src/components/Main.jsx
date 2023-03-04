import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home/Home';
// import Clients from './Clients';
// import AboutMe from './AboutMe';
// import Footer from './Footer/Footer';
import HeaderMedia from './HeaderMedia/HeaderMedia';
import ArrowUp from './ArrowUp/ArrowUp';
// import OtherProjects from './OtherProjects';
// import OtherProjectView from './OtherProjectView';
import Navigation from './Navigation/Navigation';
import Loading from './Loading';
import PageNotFound from './PageNotFound';
import Thank from './Thank';
import Slider from './Slider/Slider';

// const LazyWork = React.lazy(() => import('./Work'));

function Main({ props }) {
	return (
		<main className="page">
			<ArrowUp scroll={props.scrollHome} show={props.arrowUpShow} />
			<HeaderMedia />
			<Navigation props={props} />

			<Routes>
				<Route path='/page-not-found' element={<PageNotFound />} />
				{/* <Route path='/thank' element={<Thank />} /> */}
				
				<Route
					exact
					path="/"
					element={
						<React.Suspense fallback={<Loading />}>
							<Home props={props} />
							{/* <Clients /> */}

							{/* <React.Suspense fallback={<Loading />}>
								<LazyWork props={props} />
							</React.Suspense> */}

							<h2 className="carousel-title">Other projects</h2>
							<Slider />
							{/* <AboutMe props={props} /> */}
							{/* <Footer props={props} /> */}
						</React.Suspense>
					}
				/>
				

				{/* <Route
					path="/other-projects"
					element={<OtherProjects link={props.toCurtainProject} />}
				/>

					<Route
						path="other-projects/:id"
						element={<OtherProjectView />}
					/>

				<Route path="*" element={ <Navigate to="/page-not-found" /> } /> */}
			</Routes>
		</main>
	);
}

export default Main;
