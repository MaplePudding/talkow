import React, {useState} from 'react'
import Axios from "axios"
import Lodash, {isEqual}from 'lodash'
import Status from '../../status/status'
import './friendsCpt.less'

function getFriendsList(userName, setFriendsList){
    Axios({
        url: "/api/friendsList",
        method: "get",
        params:{
            userName: userName
        }
    }).then(res =>{
        setFriendsList(res.data[0].friends);
    })
}

function showChatCpt(chatCptFlag, setChatCptFlag){
    setChatCptFlag(!chatCptFlag);
}

function getFriendsListItem(){

}

function FriendsCpt(){

    let [friendsList, setFriendsList] = useState("");
    let [chatCptFlag, setChatCptFlag] = useState(false);

    if(friendsList === ""){
        getFriendsList(Status.getUserName(), setFriendsList);
    }

    return(
        <div id="friendsCpt">
            <div id="friendsListOuter">

            </div>
            <div id="friendsChat">

            </div>
        </div>
    )
}

export default FriendsCpt;