import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const Register = props => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [password2,setPassword2] = useState("");
    const [errors,setErrors] = useState({});

    const onSubmit = e => {
        e.preventDeault();

        const newUser = {
            name: name,
            email: email,
            password: password,
            password2: password2
        }

        console.log(newUser)
    };


    return(
        <div>
            <h3>Already have an account?</h3>
            <a href="/login">Login</a>
            <Container>
                <Form>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="First and Last Name" onChange={e => setName(e.target.value)} errors={errors.name}/>
                        </FormGroup>
                        </Col>
                        
                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} errors={errors.email}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="" onChange={e => setPassword(e.target.value)} errors={errors.password}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password2">Confirm password</Label>
                        <Input type="password" name="address2" id="password2" placeholder="" onChange={e => setPassword2(e.target.value)} errors={errors.name2}/>
                    </FormGroup>
                    <Button onSubmit={e => onSubmit(e)}>Submit</Button>
                </Form>
            </Container>
 
        </div>
    )

}

export default Register;