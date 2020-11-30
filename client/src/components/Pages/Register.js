import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

const Register = props => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.history.push("/dashboard");
        }
    }, [props.auth])

    useEffect(() => {
        setErrors(props.errors)
    }, [props.errors])



    const onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: name,
            email: email,
            password: password,
            password2: password2
        }
        props.registerUser(newUser, props.history);

    };


    return (
        <div>
            <h3>Already have an account?</h3>
            <Link to="/login">Login</Link>
            <Container>
                <Form onSubmit={onSubmit}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" placeholder="First and Last Name" onChange={e => setName(e.target.value)} errors={errors.name} className={classnames("", {
                                    invalid: errors.name
                                })} />
                                <span className="red-text">{errors.name}</span>
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} errors={errors.email} className={classnames("", {
                                    invalid: errors.email
                                })} />
                                <span className="red-text">{errors.email}</span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="" onChange={e => setPassword(e.target.value)} errors={errors.password} className={classnames("", {
                            invalid: errors.password
                        })} />
                        <span className="red-text">{errors.password}</span>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password2">Confirm password</Label>
                        <Input type="password" name="address2" id="password2" placeholder="" onChange={e => setPassword2(e.target.value)} errors={errors.name2} className={classnames("", {
                            invalid: errors.password2
                        })} />
                        <span className="red-text">{errors.password2}</span>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        </div>
    )
};

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,
    { registerUser }
)(withRouter(Register));