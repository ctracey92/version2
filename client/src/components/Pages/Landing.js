import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

const Landing = props => {
    return(
        <div>
            <Container>
                <Row>
                    <h1>Welcome to my page!</h1>
                </Row>
                <Row>
                    <p>Please escuse the mess as we are currently under renovations.</p>
                </Row>
                <Row>
                    <Col>
                        <a href="/login">Log In</a>
                    </Col>
                    <Col>
                        <a href="/register">Register</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Landing;
