import React from 'react'
import {HashRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Status from './status/status'
import FrontPage from './frontpage/frontpage'
import HomePage from "./homepage/homepage";
import './App.css';

function App() {

    return(
        <div id="root">
            <Router>
                <div>
                    <Redirect to={Status.getUserStatus() === false ? "/front" : "/home"}/>
                    <Route path="/front" component={FrontPage}/>
                    <Route path="/home" component={HomePage}/>
                </div>
            </Router>
        </div>
    )
}

export default App;
