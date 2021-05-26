import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Writers from './Components/Writers';
import newdata from "./Components/Writers";

import './App.css';

import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/home">
                    <Home/>
                </Route>
                <Route path="/writers">
                    <Writers/>
                    <newdata/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
