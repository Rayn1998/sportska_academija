import React from "react";

import fb from "./images/Vector.png";
import inst from "./images/Vector (1).png";
import twit from "./images/Vector (2).png";
import ln from "./images/Vector (3).png";
import be from "./images/Vector (4).png";

function Footer({ props }) {
    const icons = [fb, inst, twit, ln, be];

    return (
        <footer className="footer" ref={props.contactsRef}>
            <div className="footer__wrapper">
                <div className="footer__content">
                    <h2 className="footer__title">
                        SPORTSKA <span className="bold-text">AKADEMIJA</span>
                    </h2>
                    <p className="footer__text">
                        So that we can start to build your body...
                    </p>
                </div>

                <div className="footer__socials">
                    {icons.map((icon, i) => {
                        return (
                            <a
                                href="#"
                                key={i}
                                className="footer__social-icon"
                            ><img src={icon} className="footer__social-icon-img" alt={icon} style={{filter: 'grayscale(100)'}} /></a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
