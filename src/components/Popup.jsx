import React, { children } from 'react';

// title, isOpen, onClose, link
function Popup(props) {
	return (
		<div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
			<div className="popup__body">
				<div className="popup__content">
					<button
						type="button"
						className="popup__close-btn"
						aria-label="Кнопка закрытия попапа"
						onClick={props.onClose}
					/>
					<h2 className="popup__title">{props.title}</h2>
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default Popup;
