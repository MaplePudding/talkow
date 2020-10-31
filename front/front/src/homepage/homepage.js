import React, {useState}from 'react'
import {isEqual} from 'lodash'
import FriendsCpt from "./friends/friendsCpt";
import GroupCpt from "./group/groupCpt";
import SearchCpt from "./search/searchCpt";
import NotifyCpt from "./notify/notifyCpt";
import {Link, Redirect, HashRouter as Router, Route} from "react-router-dom";
import Axios from 'axios'
import friendsLight from '../img/friendsLight.png'
import friendsDark from '../img/friendsDark.png'
import groupLight from '../img/groupLight.png'
import groupDark from '../img/groupDark.png'
import notifyLight from '../img/notifyLight.png'
import notifyDark from '../img/notifyDark.png'
import searchLight from '../img/searchLight.png'
import searchDark from '../img/searchDark.png'
import avatar from '../logo.svg'
import './homepage.css'


function getUserData(){
    return {};
}

function HomePage(){
    let [userData, setUserData] = useState({});
    let [menuStatus, setMenuStatus] = useState({
        friends: true,
        group: false,
        search: false,
        notify: false,
    })

    function changeMenuItemStyle(itemName){
        for(let item in menuStatus){
            menuStatus[item] = false;
        }
        menuStatus[itemName] = true;
        setMenuStatus(menuStatus);
    }

    return(
        <div id="homePage">
            <div id="homePageLeft">
                <div id="avatar">
                    <img src={avatar}/>
                </div>
                <div id="homePageMenu">
                    <div className={menuStatus["friends"] ? "homePageMenuItemChecked" : "homePageMenuItem"} onClick={() =>{changeMenuItemStyle("friends")}}>
                        <Link to="/home/friends"><img src={menuStatus["friends"] ? friendsLight : friendsDark}/>Friends</Link>
                    </div>
                    <div className={menuStatus["group"] ? "homePageMenuItemChecked" : "homePageMenuItem"} onClick={() =>{changeMenuItemStyle("group")}}>
                        <Link to="/home/group"><img src={menuStatus["group"] ? groupLight : groupDark}/>Group</Link>
                    </div>
                    <div className={menuStatus["search"] ? "homePageMenuItemChecked" : "homePageMenuItem"} onClick={() =>{changeMenuItemStyle("search")}}>
                        <Link to="/home/search"><img src={menuStatus["search"] ? searchLight : searchDark}/>Search</Link>
                    </div>
                    <div className={menuStatus["notify"] ? "homePageMenuItemChecked" : "homePageMenuItem"} onClick={() =>{changeMenuItemStyle("notify")}}>
                        <Link to="/home/notify"><img src={menuStatus["notify"] ? notifyLight : notifyDark}/>Notify</Link>
                    </div>
                </div>
            </div>
            <div id="homePageRight">
                <Router>
                    <div id="homePageRightInner">
                        <Redirect path="/home" to="/home/friends"/>
                        <Route path="/home/friends" component={FriendsCpt}/>
                        <Route path="/home/group" component={GroupCpt}/>
                        <Route path="/home/search" component={SearchCpt}/>
                        <Route path="/home/notify" component={NotifyCpt}/>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default HomePage;