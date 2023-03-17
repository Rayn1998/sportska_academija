import React from 'react';

const Contacts = () => {
    return (
        <div className='contacts'>
            <form
				className="contacts__form"
				name="contact__form"
				action="https://formsubmit.co/yuriy.bodolanov@gmail.com"
				method="POST"
				// onSubmit={handleSubmit}
			>
				<input
					type="email"
					name="email"
					className="contacts__form-email"
					// value={formValues.email}
					// onChange={handleForm}
					placeholder="Enter your email..."
					required
				/>
				{/* <input
					type="hidden"
					name="_next"
					value="https://bodolanov-vfx.com/#/thank"
				></input> */}
				<textarea
					className="contacts__form-text"
					type="message"
					// value={formValues.message}
					// onChange={handleForm}
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
