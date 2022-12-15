import React, { useEffect, useState } from "react";
import '../styles/page_content.css'
import Title from "./Title";
import getUserData from "../api/UserData";
import getUserActivity from "../api/UserActivity";
import getUserPerf from "../api/UserPerf";
import getUserSessions from "../api/UserSession";

const search = window.location.search
const params = new URLSearchParams (search)
const userId = params.get ('id')
console.log(userId)

function PageContent() {

    const [user, setUser] = useState({})
    
    function getInfos() {
        getUserData(userId)
            .then(({data}) => setUser(data));
        /* getUserActivity(userId)
            .then((data) => console.log(data.data))
        getUserPerf(userId)
            .then((data) => console.log(data.data))   
        getUserSessions(userId)
            .then((data) => console.log(data.data))  */        
    }
    
    useEffect(() => {
        getInfos()
    }, [])
    
    if(!user.userInfos) {
        return null  
    }
    else {
        console.log(user.userInfos)
    }    
    
    const firstName = user.userInfos.firstName

    return (<div className="page_content">
        <Title firstName={firstName}/>
    </div>)

}

export default PageContent