import React, {useState}from 'react'
import Axios from 'axios'
import './loginCpt.css'

function LoginCpt(){
    let [userName, setUserName] = useState("");
    let [password, setPwd] = useState("");

    function changeUserName(userName){
        setUserName(userName);
    }

    function changePwd(password){
        setPwd(password);
    }

    function changeTipVby_1(){
        if(userName === "" || password === ""){
            return true;
        }
        return false;
    }

    function changeTipVby_2(){
        console.log(userName)
        if(userName === "" || password === ""){
            return true;
        }
        return false;
    }

    return(
        <div id="loginCpt">
            <div className="loginCptInputOuter">
                username:<input onChange={event => changeUserName(event.target.value)}/>
            </div>
            <div className="loginCptInputOuter">
                password:<input onChange={event => changePwd((event.target.value))}/>
            </div>
            <div id="loginTips">
                <div className="loginTip" >
                    username or password error
                </div>
                <div className={changeTipVby_2() === false ? "hiddenLoginTip loginTip" : "loginTip"}>
                    username or password can not be empty
                </div>
            </div>
            <button id="loginBtn">Login</button>
        </div>
    )
}

export default LoginCpt;