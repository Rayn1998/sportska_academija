import React from 'react';
// import './css/index.css';

function Footer({props}) {
  return (
    <footer className="footer" ref={props.contactsRef}>
      <div className="footer__wrapper">
        <div className="footer__content">
          <h2 className="footer__title">SPORTSKA <span className="bold-text">AKADEMIJA</span></h2>
          <p className="footer__text">So that we can start to build your body...</p>
        </div>

        {/* <div className="footer__socials">
          <a href="mailto:yuriy.bodolanov@gmail.com" 
            className="footer__social-icon footer__social-icon_type_mail"></a>
          <a href="https://www.artstation.com/bodolanov"
            target="_blank"
            className="footer__social-icon footer__social-icon_type_artstation"></a>
          <a href="https://www.imdb.com/name/nm12138390/?ref_=fn_al_nm_1"
            target="_blank"
            className="footer__social-icon footer__social-icon_type_imdb"></a>
          <a href="https://www.linkedin.com/in/yuriy-bodolanov-9287651aa/"
            target="_blank"
            className="footer__social-icon footer__social-icon_type_linkedin"></a>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;