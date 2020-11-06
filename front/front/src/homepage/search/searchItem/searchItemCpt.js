import React from 'react'
import Axios from 'axios'
import Status from '../../../status/status'
import searchItemImg from '../../../logo.svg'
import './searchItemCpt.css'

function addFriend(userName, targetName){
    Axios({
        method: 'get',
        url: '/api/addFriend',
        params:{
            userName: userName,
            targetName: targetName
        }
    }).then(res =>{
        console.log(res.data);
    })
}

function SearchItemCpt(props){
    return(
        <div className="searchItemCpt">
            <img src={searchItemImg}/>
            <div className="searchItemName">{props.userName}</div>
            <button onClick={() => addFriend(props.userName, props.targetName)}>Add</button>
        </div>
    )
}

export default SearchItemCpt;