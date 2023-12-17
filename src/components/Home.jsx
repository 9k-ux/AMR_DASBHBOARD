import React,{useState} from 'react';
import {Button, Row, Col} from "react-bootstrap";
import Connection from './Hconn'; // Import the Connection component
import Teleoperation from './Teleoperation';
import RobotState from './RobotState';
    
    

const Home=()=>{
    const [counter, setCounter] = useState(219);
    // Function to handle the button click and update the counter
  const handleButtonClick = () => {
    // Increment the counter by 1
    setCounter(counter + 1);
  };
  
    return(
        
        
        <div className="footer">
            <h1 className="text-center mt-3">Robot Control Page</h1>
            {/* <p>Counter: {counter}</p> */}

            <Row>
              <Col>
                <Connection/>
              </Col>
            </Row>
            
            <Row className='mt-5 ml-5'>
              <Col>
                <Teleoperation/>
              </Col>
              <Col>
                <h1>MAP</h1>
                <p>For displaying map</p>
              </Col>
            </Row>

            <Row className='mt-5'>
              <Col>
              <RobotState/>
              </Col>
            </Row>
            
          

      
      {/* <Button onClick={handleButtonClick}>Increment</Button> */}

        </div>
    )
}

export default Home;