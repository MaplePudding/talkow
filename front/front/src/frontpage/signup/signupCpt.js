import React, {useState}from 'react'
import Axios from 'axios'
import './signupCpt.css'

function SignupCpt(props){


    let [userName, setUserName] = useState("");
    let [password, setPwd] = useState("");
    let [email, setEmail] = useState("");
    let [errorFlag, setErrorFlag] = useState(false);
    let illegalCrts = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", ",", "<", ".", ">", "/", "?"]

    /**
     * Delete the blank in the string
     * **/

    function removeBlank(targetStr){
        return targetStr.replace(" ", "");
    }

    /**
     *Remove illegal characters
     * **/

    function removeIllegalCrt(targetStr){
        for(let c in illegalCrts){
            targetStr.replace(illegalCrts[c], "")
        }
        return targetStr;
    }

    function changeUserName(userName){
        setUserName(userName);
    }

    function changePwd(password){
        setPwd(password);
    }

    function changeEmail(email){
        setEmail(email);
    }

    function changeTipVby_1(flag){
        setErrorFlag(flag);
    }

    function changeTipVby_2(){
        if(userName === "" || password === "" || email === ""){
            return true;
        }
        return false;
    }

    function signup(userName, pwd, email){
        userName = removeIllegalCrt(removeBlank(userName));
        if(userName !== "" && userName.length < 20 && pwd !== "" && pwd.length < 20 && email !== "" && email.length < 20){
            Axios({
                method:'post',
                url: '/api/signup',
                data:{
                    userName: userName,
                    pwd: pwd,
                    email: email
                }
            }).then(res =>{
                if(res.data){
                    props.history.push('/front/login')
                }else{
                    setErrorFlag(true);
                }
            })
        }
    }
    return(
        <div id="signupCpt">
            <div className="signupCptInputOuter">
                username:<input onChange={event => {changeUserName(event.target.value); changeTipVby_1(false)}}/>
            </div>
            <div className="signupCptInputOuter">
                password:<input onChange={event => {changePwd(event.target.value); changeTipVby_1(false)}}/>
            </div>
            <div className="signupCptInputOuter">
                email:<input onChange={event => {changeEmail(event.target.value); setErrorFlag(false)}}/>
            </div>
            <div id="signupTips">
                <div className={changeTipVby_2() === false ? "signupTip hiddenSignupTip" : "signupTip"}>
                    The content can not be empty
                </div>
                <div className={errorFlag === true ? "signupTip" : "signupTip hiddenSignupTip"}>
                    The userName has already been existed
                </div>
            </div>
            <button id="signupBtn" onClick={() => signup(userName, password, email)}>Sign Up</button>
        </div>
    )
}

export default SignupCpt;