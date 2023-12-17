import React ,{Component} from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About';

// Define a React component
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Container>
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
            </Routes>
        </Container>
        
      </div>
    );
  }
}


export default MyComponent;