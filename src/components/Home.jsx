import React,{useState} from 'react';
import {Button} from "react-bootstrap";
import Connection from './Hconn'; // Import the Connection component


    
    

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
            <Connection/>
            
          

      
      <Button onClick={handleButtonClick}>Increment</Button>

        </div>
    )
}

export default Home;