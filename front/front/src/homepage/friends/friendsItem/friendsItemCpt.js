import React from 'react'
import itemImg from '../../../logo.svg'

function FriendsItemCpt(props){
    return(
        <div className="friendsItemCpt">
            <div className="friendsItemMsgNum"></div>
            <img src={itemImg}/>
            <div className="friendsItemName"></div>
            <div className="friendsItemContent"></div>
            <div className="friendsItemDate"></div>
            <button>Delete</button>
        </div>
    )
}