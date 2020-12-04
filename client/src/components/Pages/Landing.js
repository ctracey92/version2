import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button} from 'reactstrap';

const Landing = props => {
    return(
        // <div>
            <Container className='align-items-center'>
                <Row className="d-flex justify-content-center">
                    <h1>Welcome to my page!</h1>
                </Row>
                <Row className="d-flex justify-content-center">
                    <button className="mr-1 ml-1 main-bttn"><Link to="/login">Log In</Link></button>
                    <button className="mr-1 ml-1 main-bttn"><Link to="/register">Register</Link></button>

                </Row>
            </Container>
        // </div>
    )
}

export default Landing;
