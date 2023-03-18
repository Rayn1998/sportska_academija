import React from 'react';

// title, isOpen, onClose, link
function Popup(props) {
	return (
		// <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
		<div className="popup popup_opened" style={{
            // display: props.isOpen ? "block" : "none",
            display: "block",
            visibility: props.isOpen ? "visible" : "hidden",
            opacity: props.isOpen ?  "1" : "0",
            transition: "all 0.3s ease-in-out"
        }}>
			<div className="popup__body">
				<div className="popup__content">
					<button
						type="button"
						className="popup__close-btn"
						aria-label="Кнопка закрытия попапа"
						onClick={props.onClose}
					/>
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default Popup;
