import React from 'react';

const FitnessSolutionCard = (props) => {
	const {image, title, text} = props;
	return (
		<div className="fitness-solution-card">
			<img src={image} alt={image} />
			<h2 className="fitness-solution-card__title">{title}</h2>
			<p className="fitness-solution-card__text">{text}</p>
		</div>
	);
};

export default FitnessSolutionCard;
