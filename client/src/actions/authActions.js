import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";

//Register User
export const registerUser = (userData, history) => dispatch => {
    axios   
        .post("/api/users/register", userData)
        .then(res => history.push("/login"))
        .catch(err => 
            dispatch({
            type: GET_ERRORS,
            payload: err.response.data
            })
        );
};

//Login 
export const loginUser = userData => dispatch => {
    console.log('this was used')
    axios
        .post("/api/users/login", userData)
        .then(res => {
            //Set token to local storage
            const {token} = res.data;
            localStorage.setItem("jwtToken", token);
            //Set token to Auth header
            setAuthToken(token);
            //decode data
            const decoded = jwt_decode(token);
            //set curr users
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })    
        );
};

//Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

//User Loading
export const setUserLoading = () => {
    return{
        type: USER_LOADING
    };
};

//Log out User
export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    //Set header to false
    setAuthToken(false)
    //Set curr user obj to empty
    dispatch(setCurrentUser({}));
};