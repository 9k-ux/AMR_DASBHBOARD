import React ,{Component} from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'

// Define a React component
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Container>
            <Routes>
                
                    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<p>this is about++ sn</p>}/>
            
            </Routes>
        </Container>
        
      </div>
    );
  }
}


export default MyComponent;