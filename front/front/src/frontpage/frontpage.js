import React,{useState} from 'react'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import LoginCpt from './login/loginCpt'
import SignupCpt from './signup/signupCpt'
import './frontpage.css'

/**
 * Change the navigation menu style
 */

function changeNaviStyle(naviStyleFlag, setNaviStyleFlag, itemName){
    if(!(itemName === "item1" && naviStyleFlag === true) && !(itemName === "item2" && naviStyleFlag === false)){
        naviStyleFlag === false ? setNaviStyleFlag(true) : setNaviStyleFlag(false);
    }
}

function FrontPage(){

    let [naviStyleFlag, setNaviStyleFlag] = useState(false);

    return(
        <div id="frontPage">
            <div id="frontPageInner">
                <div id="frontPageNavi">
                    <Link to="/front/signup" className={naviStyleFlag === true ? "frontPageNaviChecked" : "frontPageNaviUnchecked"} onClick={() =>{changeNaviStyle(naviStyleFlag, setNaviStyleFlag, "item1")}}>Signup</Link>
                    <Link to="/front/login" className={naviStyleFlag === false ? "frontPageNaviChecked" : "frontPageNaviUnchecked"} onClick={() =>{changeNaviStyle(naviStyleFlag, setNaviStyleFlag, "item2")}}>Login</Link>
                </div>
                <div id="frontPageContent">
                    <Router>
                        <div>
                            <Redirect path="/front" to="/front/login"/>
                            <Route path="/front/login" component={LoginCpt}/>
                            <Route path="/front/signup" component={SignupCpt}/>
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default FrontPage;