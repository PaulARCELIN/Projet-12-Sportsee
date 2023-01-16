import Header from "./components/Header";
import "./styles/body.css"
import Sider from "./components/Sider";
import Error from "./components/Error";
import PageContent from "./components/PageContent";
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "./mocked data/mockedData";
import { getUserId } from "./utility/utilityFunctions";
import getUserPerf from "./api/UserPerf";
import getUserData from "./api/UserData";
import getUserActivity from "./api/UserActivity";
import getUserSessions from "./api/UserSession";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from "react-router";


let userId = getUserId()
if (userId == null) {
    window.location.href = 'http://localhost:3001/user?id=18'
}
console.log('ID = '+ userId)

/* let mockMainData = {}

    USER_MAIN_DATA.forEach((e) => {
        if(userId == e.id){
            mockMainData = e
        }
    })

let mockActivityData = {}

    USER_ACTIVITY.forEach((e) => {
        if(userId == e.userId){
            mockActivityData = e
        }
    })    

let mockAverageSessions = {}

    USER_AVERAGE_SESSIONS.forEach((e) => {
        if(userId == e.userId){
            mockAverageSessions = e
        }
    })

let mockPerformance = {}

    USER_PERFORMANCE.forEach((e) => {
        if(userId == e.userId){
            mockPerformance = e
        }
    }) */
    
function App() {
 

    const [activityData, setActivityData] = useState({})
    const [mainData, setMainData] = useState({})
    const [perfData, setPerfData] = useState({})
    const [sessionData, setSessionData] = useState({})
    
    useEffect(() => {
        initData()
    }, [])
    
    async function initData() {
        const activityData = await getUserActivity(userId)
        const mainData = await getUserData(userId)
        const perfData = await  getUserPerf(userId)
        const sessionData = await  getUserSessions(userId)
        setActivityData(activityData.data)
        setMainData(mainData.data)
        setPerfData(perfData.data)
        setSessionData(sessionData.data)
    }

    function dataEmptyCheck(data) {
        return Object.keys(data).length === 0 && data.constructor === Object;
    }
    
    if(dataEmptyCheck(mainData) || dataEmptyCheck(activityData) || dataEmptyCheck(sessionData) || dataEmptyCheck(perfData))
        return (<div className="App">
            <Header />
            <div className="page-container">
                <Sider />
                <Error />
            </div>
        </div>)

    return (
    <div className="App">
      <Router>
      <Header />
      <div className="page-container">
        <Sider />
        <Routes>
            <Route path="user/*" element={<PageContent 
                // mocked datas for test 
                /* userData={mockMainData} userActivity={mockActivityData} userSessions={mockAverageSessions} userPerf={mockPerformance} */
                // 
                userData={mainData} userActivity={activityData} userSessions={sessionData} userPerf={perfData}/>}>
            </Route>
            <Route exact path="/" element={<Navigate to="/user/" />}></Route>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;

