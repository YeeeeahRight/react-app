import React, {Suspense} from 'react';
import Home from './components/Home';
import WriterList from './components/WriterList';

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
                        <Home/>
                    </Route>
                    <Route path="/writers/:id?">
                        <WriterList/>
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    );
}

export default App;
