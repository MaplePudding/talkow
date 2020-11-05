import React, {useState} from 'react'
import {HashRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Status from './status/status'
import {wsObj} from "./ws/ws";
import FrontPage from './frontpage/frontpage'
import HomePage from "./homepage/homepage";
import './App.css';


function App() {

    let [rerenderFlag, setRenderFlag] = useState(false);

    if(Status.getUserStatus()){
        wsObj.getWs();
    }

    return(
        <div id="root">
            <Router>
                <div>
                    <Redirect to={Status.getUserStatus() === false ? "/front" : "/home"}/>
                    <Route path="/front" render ={props => <FrontPage setRenderFlag={setRenderFlag}/>}/>
                    <Route path="/home" component={HomePage}/>
                </div>
            </Router>
        </div>
    )
}

export default App;
