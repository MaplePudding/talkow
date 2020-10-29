import React, {useState}from 'react'
import Axios from 'axios'
import './signupCpt.css'

function SignupCpt(){

    let [userName, setUserName] = useState("");
    let [password, setPwd] = useState("");
    let [email, setEmail] = useState("");

    function changeUserName(userName){
        setUserName(userName);
    }

    function changePwd(password){
        setPwd(password);
    }

    function changeEmail(email){
        setEmail(email);
    }

    function changeTipVby_1(){
        if(userName === "" || password === "" || email === ""){
            return true;
        }
        return false;
    }

    function changeTipVby_2(){
        console.log(userName)
        if(userName === "" || password === "" || email === ""){
            return true;
        }
        return false;
    }
    return(
        <div id="signupCpt">
            <div className="signupCptInputOuter">
                username:<input onChange={event => changeUserName(event.target.value)}/>
            </div>
            <div className="signupCptInputOuter">
                password:<input onChange={event => changePwd(event.target.value)}/>
            </div>
            <div className="signupCptInputOuter">
                email:<input onChange={event => changeEmail(event.target.value)}/>
            </div>
            <div id="signupTips">
                <div className={changeTipVby_2() === false ? "signupTip hiddenSignupTip" : "signupTip"}>
                    The content can not be empty
                </div>
                <div className="signupTip">
                    The userName has already been existed
                </div>
            </div>
            <button id="signupBtn">Sign Up</button>
        </div>
    )
}

export default SignupCpt;