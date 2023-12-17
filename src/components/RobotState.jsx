import React, { useState} from 'react';
import { Row,Col } from "react-bootstrap";


const RobotState = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [orientation, setOrientation] = useState(0);
    const [linearVelocity, setLinearVelocity] = useState(0);
    const [angularVelocity, setAngularVelocity] = useState(0);
    return (
        <div>
            <Row>
                <Col>
                    <h4 className="mt-4">Position</h4>
                    <p className="mt-0">x : {x}</p>
                    <p className="mt-0">y : {y}</p>
                    <p className="mt-0">Orientation : {orientation}</p>
                </Col>
            </Row>
            <Row>
            <Col>
                    <h4 className="mt-4">Velocity</h4>
                    <p className="mt-0">Linear velocity : {linearVelocity}</p>
                    <p className="mt-0">Angular velocity : {angularVelocity}</p>
                </Col>
            </Row>
        </div>
        );
    };

export default RobotState;