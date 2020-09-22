import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/Pieces/Navbar'
import Landing from "./components/Pages/Landing"
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";

function App() {
    return ( 
    <div>
        <Router>
            <div className="App">
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </div>
        </Router>
    </div>
     );
    }

    export default App;