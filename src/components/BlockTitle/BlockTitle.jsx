import React from 'react';

const BlockTitle = ({ text, yellowText, space }) => {
	return (
		<h2 className="block-title">
			{text}
			<p className="block-title__space" style={{
				display: space ? "inline" : "none",
			}}> </p>
			<p className="yellow-text">{yellowText}</p>
		</h2>
	);
};

export default BlockTitle;
