import React from 'react'
import ReactPlayer from 'react-player';

const Player = (props) => {
    return (
        <div className="popup__player-wrapper">
            <ReactPlayer
                className="popup__player"
                url={props.link}
                width="100%"
                height="100%"
                controls={true}
                playing={props.isOpen ? true : false}
            />
        </div>
    )
}

export default Player
