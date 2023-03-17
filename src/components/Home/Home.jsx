import React from 'react';

import { useLocation } from 'react-router-dom';


function Home({props}) {

  const location = useLocation();

  return (
    <div className="home">
      <h1 className="home__title">HARD WORK <span className="yellow-text">PAYS OFF</span></h1>
      <button 
        style={{
          visibility: location.pathname === '/' ? "visible" : 'hidden'
        }}
        type="button" 
        className="home__button"
        onClick={props.scrollSwiper}
      ></button>
      <div className='home__contact' onClick={props.scrollContacts} >CONTACT NOW</div>
    </div>
  );
}

export default Home;