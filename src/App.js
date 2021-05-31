import React, {Suspense} from 'react';
import HomePage from './components/HomePage';
import WritersPage from './components/WritersPage';

import './App.css';

import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Suspense fallback={"Loading..."}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/writers/:id?">
                        <WritersPage/>
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    );
}

export default App;
