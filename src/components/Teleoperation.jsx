import React from 'react';
import { Joystick } from 'react-joystick-component';

const Teleoperation = () => {
    const handleMove = () => {
        console.log('handleMove');

    };
    const handleStop = () => {
        console.log('handleStop');
    };

  return (
    <div>
      <Joystick 
      size={150} 
      sticky={false} 
      baseColor="#EEEEEE" 
      stickColor="#BBBBBB" 
      move={handleMove} 
      stop={handleStop}></Joystick>
    </div>
  );
}

export default Teleoperation;