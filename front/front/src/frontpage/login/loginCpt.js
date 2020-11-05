import React, {useState}from 'react'
import Status from '../../status/status'
import Axios from 'axios'
import './loginCpt.css'

function LoginCpt(props){

    let [userName, setUserName] = useState("");
    let [password, setPwd] = useState("");
    let [errorFlag, setErrorFlag] = useState(false);

    function changeUserName(userName){
        setUserName(userName);
    }

    function changePwd(password){
        setPwd(password);
    }

    function changeTipVby_1(flag){
        setErrorFlag(flag)
    }

    function changeTipVby_2(){
        if(userName === "" || password === ""){
            return true;
        }
        return false;
    }

    function login(userName, password){
        if(userName !== "" && password !== "" && userName.length < 20 && password.length < 20){
            Axios({
                method: 'get',
                url: '/api/login',
                params:{
                    userName: userName,
                    pwd: password
                }
            }).then((res) =>{
                if(res.data){
                    Status.changeUserName(userName);
                    Status.changeUserStatus();
                    props.setRenderFlag(true);
                }else{
                    changeTipVby_1(true);
                }
            })
        }
    }



    return(
        <div id="loginCpt">
            <div className="loginCptInputOuter">
                username:<input onChange={event => {changeUserName(event.target.value); changeTipVby_1(false)}}/>
            </div>
            <div className="loginCptInputOuter">
                password:<input onChange={event => {changePwd(event.target.value); changeTipVby_1(false)}}/>
            </div>
            <div id="loginTips">
                <div className={!errorFlag ? "hiddenLoginTip loginTip" : "loginTip"} >
                    username or password error
                </div>
                <div className={changeTipVby_2() === false ? "hiddenLoginTip loginTip" : "loginTip"}>
                    username or password can not be empty
                </div>
            </div>
            <button id="loginBtn" onClick={() =>login(userName, password)}>Login</button>
        </div>
    )
}

export default LoginCpt;