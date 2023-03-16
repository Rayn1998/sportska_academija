import React, { useState } from 'react'

const ArrowUp = ({scroll, show}) => {
    const [clicked, setClicked] = useState(false);
    const click = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 1000);
    }
    const scrollHome = () => {
        scroll();
        click();
    }
    return (
        <div 
            className="arrow-up"
            style={{
                visibility: show ? 'visible' : 'hidden',
                opacity: show ? '1' : '0',
                transition: 'all 0.5s ease-in-out',
                transform: clicked ? 'translateY(-1000px)' : 'translateY(0)'
            }}
            onClick={scrollHome}
        ></div>
    )
}

export default ArrowUp