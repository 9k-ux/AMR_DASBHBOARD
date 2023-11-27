// connection.jsx

import React, { useState, useEffect } from 'react';
import Alert from "react-bootstrap/Alert";
const Connection = () => {
  const [connection, setconnection] = useState(false);
  const [ros, setRos] = useState(null);

  useEffect(() => {
    // This will run once when the component mounts
    initConnection();
  }, []); // The empty dependency array ensures it runs only once

  function initConnection() {
    const newRos = new window.ROSLIB.Ros();
    setRos(newRos);
    console.log(newRos);
    
    console.log("hello world");
    newRos.onopen = () => {
        setconnection(true);
        
        
      };
  
      // Event handler for when the connection is closed
      newRos.onclose = () => {
        setconnection(false);
        setTimeout(()=>{
            try {
                newRos.connect('ws://192.168.1.145:9090');
              } catch (error) {
                console.error('Error connecting to ROS server:', error);
                // Handle the connection error
              }

        },3000);
        
        
        
      };

     // Attempt to connect
     try {
        newRos.connect('ws://192.168.1.145:9090');
      } catch (error) {
        console.error('Error connecting to ROS server:', error);
        // Handle the connection error
      }
  
      newRos.onerror = (error) => {
        console.error('Connection error:', error);
        // You can handle the error or update the state accordingly
      };
      
  }
    
  return (
    <div>
    
  <Alert className='text-center m-3' variant={connection ? 'success' : 'danger'}>
  <p >Connection Status: {connection ? 'Robot Connected' : 'Robot Disconnected'}</p>

  </Alert>
   
     
   
    
      
    </div>
  );
};

export default Connection;
