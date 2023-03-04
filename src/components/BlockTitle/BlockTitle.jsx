import React from 'react';

const BlockTitle = ({ text, yellowText }) => {
	return (
		<h2 className="block-title">
			{text}
			<p className="yellow-text">{yellowText}</p>
		</h2>
	);
};

export default BlockTitle;
