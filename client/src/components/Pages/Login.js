import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";



const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        const userData = {
            email: email,
            password: password
        }

        props.loginUser(userData);
        console.log(userData);


    }

    return (
        <div>
            <h3>Don't have an account?</h3>
            <Link to="/register">Register</Link>
            <Container>
                <Form onSubmit={onSubmit}>
                    <Row form>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} errors={errors.email} className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })} />
                            <span className="red-text">
                                {errors.email}
                                {errors.emailnotfound}
                            </span>
                        </FormGroup>
                    </Row>
                    <Row form>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="" onChange={e => setPassword(e.target.value)} errors={errors.password} className={classnames("", {
                                invalid: errors.password || errors.passwordincorrect
                            })} />
                            <span className="red-text">
                                {errors.password}
                                {errors.passwordincorrect}
                            </span>
                        </FormGroup>
                    </Row>
                    <Button type="submit">Login</Button>
                </Form>
            </Container>
        </div>
    )


}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);