import React from 'react';

const ContactForm = () => {
	return (
		<div className="contact-form">
			<form
				className="contact-form__container"
				name="contact-form"
				action="https://formsubmit.co/yuriy.bodolanov@gmail.com"
				method="POST"
			>
				<input
					type="email"
					name="email"
					className="contact-form__email"
					placeholder="Enter your email..."
					required
				/>
				<input
					type="hidden"
					name="_next"
					value="https://bodolanov-vfx.com/#/thank"
				></input>
				<textarea
					className="contact-form__text"
					type="message"
					placeholder="Write your message..."
					name="message"
					required
				/>
				<div
					className="showreels__button"
                    style={{width: '100%', height: 'fit-content', padding: '0 0'}}
				>
    				<button className='contact-form__btn' type="submit">SEND</button>
                </div>
			</form>
		</div>
	);
};

export default ContactForm;
