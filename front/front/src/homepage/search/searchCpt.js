import React, {useState} from 'react'
import Axios from 'axios'
import Status from '../../status/status'
import SearchItemCpt from "./searchItem/searchItemCpt";
import './searchCpt.css'
import searchImg from '../../img/searchDark.png'

function search(userName, searchContent, getSearchList, setSearchList){
    if(searchContent !== ''){
        Axios({
            method: 'get',
            url: '/api/search',
            params:{
                userName: userName,
                searchContent: searchContent
            }
        }).then(res =>{
            return getSearchList(res.data, setSearchList);
        })
    }
}

function getSearchList(searchRes, setSearchList){
    let res = [];

    for(let i in searchRes){
        res.push(
            <div className="searchResInner">
                <SearchItemCpt userName={searchRes[i].userName}/>
            </div>
        )
    }

    setSearchList(res);
}

function SearchCpt(){

    let [searchContent, setSearchContent] = useState("");
    let [searchList, setSearchList] = useState([]);

    function changeSearchContent(content){
        setSearchContent(content);
    }

    return(
        <div id="searchCpt">
            <div id="searchUser">
                <div id="searchUserInner">
                    <input onChange={event =>{changeSearchContent(event.target.value)}}/>
                    <button onClick={()=>search(Status.getUserName(), searchContent, getSearchList, setSearchList)}>
                        <img src={searchImg}/>
                    </button>
                </div>
            </div>
            <div id="searchRes">
                {searchList}
            </div>
        </div>
    )
}

export default SearchCpt;