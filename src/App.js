import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Writers from './components/Writers';

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
