import React from 'react';

const Contacts = () => {
    return (
        <div className='contacts'>
            <form
				className="contacts__form"
				name="contact__form"
				// action="https://formsubmit.co/yuriy.bodolanov@gmail.com"
				action="#"
				method="POST"
			>
				<input
					type="email"
					name="email"
					className="contacts__form-input contacts__form-email"
					placeholder="Enter your email..."
					required
				/>
				<textarea
					className="contacts__form-input contacts__form-text"
					type="message"
					placeholder="Write your message..."
					name="message"
					required
				/>
                <button className='contacts__form-btn' type="submit">SEND</button>
			</form>
        </div>
    );
}

export default Contacts;
