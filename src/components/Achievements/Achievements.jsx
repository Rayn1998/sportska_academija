import React from 'react';

import FitnessSolutionCard from '../FintessSolutionCard/FitnessSolutionCard';

import runImg from "./images/exercise.png";
import thumbImg from "./images/thumbs_up.png";
import crowdImg from "./images/crowd.png";

const Achievements = () => {
  return (
    <div className="achievements">
      <div className="achievements__cards">
        <FitnessSolutionCard 
          title="100k+"
          text="Calories burnt"
          image={thumbImg}
        />
        <FitnessSolutionCard 
          title="3000"
          text="Positive reviews"
          image={crowdImg}
        />
        <FitnessSolutionCard 
          title="9000+"
          text="Satisfied customers"
          image={runImg}
        />
      </div>
    </div>
  );
}

export default Achievements;