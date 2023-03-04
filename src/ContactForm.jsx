import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = ({ onClose }) => {
	// const [formValues, setFormValues] = useState({email: '', message: ''});

	// function handleForm(e) {
	//     setFormValues(oldValues => ({
	//         ...oldValues, [e.target.name]: e.target.value
	//     }))
	// }

	// const navigate = useNavigate()

	// async function handleSubmit(e) {
	//     e.preventDefault()
	//     const message = await fetch('https://formsubmit.co/xozomuto@mailgolem.com', {
	//         method: 'POST',
	//         headers: {
	//             'Content-Type': 'text/plain;charset=UTF-8'
	//         }
	//     });
	//     onClose()
	//     if (message.ok) navigate('/thank')
	// }

	return (
		<div className="contact-form">
			<form
				className="contact-form__container"
				name="contact-form"
				action="https://formsubmit.co/yuriy.bodolanov@gmail.com"
				method="POST"
				// onSubmit={handleSubmit}
			>
				<input
					type="email"
					name="email"
					className="contact-form__email"
					// value={formValues.email}
					// onChange={handleForm}
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
					// value={formValues.message}
					// onChange={handleForm}
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
