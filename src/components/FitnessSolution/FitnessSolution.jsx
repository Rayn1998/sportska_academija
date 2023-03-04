import React from 'react';

import FitnessSolutionCard from '../FintessSolutionCard/FitnessSolutionCard';

import cardioImg from './images/Heart_with_Pulse.png';
import muscleImg from './images/Muscle_Flexing.png';
import squatsImg from './images/Squats.png';
import yogaImg from './images/Yoga.png';

const FitnessSolution = () => {
    return (
        <div className='fitness-solution'>
            <div className='fitness-solution__cards'>
                <FitnessSolutionCard 
                    image={cardioImg}
                    title='CARDIO'
                    text='Reduce stress,Increase engery
                    and feel Happy and Healthy'
                />
                <FitnessSolutionCard 
                    image={muscleImg}
                    title='MUSCLE BUILD'
                    text='Reduce stress,Increase engery
                    and feel Happy and Healthy'
                />
                <FitnessSolutionCard 
                    image={squatsImg}
                    title='WEIGHT LOSS'
                    text='Reduce stress,Increase engery
                    and feel Happy and Healthy'
                />
                <FitnessSolutionCard 
                    image={yogaImg}
                    title='YOGA'
                    text='Reduce stress,Increase engery
                    and feel Happy and Healthy'
                />
            </div>
        </div>
    );
}

export default FitnessSolution;
