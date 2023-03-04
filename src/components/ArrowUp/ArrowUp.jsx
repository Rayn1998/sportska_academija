import React from 'react'

const ArrowUp = ({scroll, show}) => {
    return (
        <div 
            className="arrow-up"
            style={{
                visibility: show ? 'visible' : 'hidden',
                opacity: show ? '1' : '0',
                transition: 'opacity 0.5s ease-in-out'
            }}
            onClick={scroll}
        ></div>
    )
}

export default ArrowUp