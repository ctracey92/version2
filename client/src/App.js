import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/Pieces/Navbar'
import Landing from "./components/Pages/Landing"
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";


import {Provider} from 'react-redux';
import store from "./store";

function App() {
    return ( 
    <Provider store={store}>
        <Router>
            <div className="App">
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </div>
        </Router>
    </Provider>
     );
    }

    export default App;