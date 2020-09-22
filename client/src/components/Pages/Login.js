import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';



const Login = (props) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errors,setErrors] = useState({});

    const onSubmit = e => {
        e.preventDeault();

        const userData = {
            email: email,
            password: password
        }

        console.log(userData);

    }

    return(
    <div>
        <h3>Don't have an account?</h3>
        <a href="/register">Register</a>
        <Container>
            <Form>
                <Row form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} errors={errors.email}/>
                    </FormGroup>
                </Row>
                <Row form>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="" onChange={e => setPassword(e.target.value)} errors={errors.password}/>
                    </FormGroup>
                </Row>
                <Button onSubmit={e => onSubmit(e)}>Login</Button>
            </Form>
        </Container>
    </div>
    )


}

export default Login;