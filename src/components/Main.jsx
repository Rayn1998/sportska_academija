import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import HeaderMedia from './HeaderMedia/HeaderMedia';
// import ArrowUp from './ArrowUp/ArrowUp';
import Navigation from './Navigation/Navigation';
import Loading from './Loading';
import PageNotFound from './PageNotFound';
// import Thank from './Thank';
import Slider from './Slider/Slider';
import FitnessSolution from './FitnessSolution/FitnessSolution';
import BlockTitle from './BlockTitle/BlockTitle';

// const LazyWork = React.lazy(() => import('./Work'));

function Main({ props }) {
	return (
		<main className="page">
			{/* <ArrowUp scroll={props.scrollHome} show={props.arrowUpShow} /> */}
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
							<Slider />
							<BlockTitle text='FIND YOUR FITNESS' yellowText='SOLUTION'/>
							<FitnessSolution />
							<BlockTitle text='ACHIVE' yellowText='MENTS' />
							{/* <Footer props={props} /> */}
						</React.Suspense>
					}
				/>
				


				<Route path="*" element={ <Navigate to="/page-not-found" /> } /> 
			</Routes>
		</main>
	);
}

export default Main;
