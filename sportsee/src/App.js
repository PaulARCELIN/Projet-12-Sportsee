import Header from "./components/Header";
import "./styles/body.css"
import Sider from "./components/Sider";
import Error from "./components/Error";
import PageContent from "./components/PageContent";
import { getUserId } from "./utility/utilityFunctions";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from "react-router";


// Use this import for mocked datas
/* import { getUserActivity, getUserData, getUserPerf, getUserSessions } from "./api/mockedApi"; */

// Use this import for API calls
import { getUserActivity, getUserData, getUserPerf, getUserSessions } from "./api/api";


/**
 * the App component
 * each props is the data returned by each endpoint of the API call
 */

// Funciton to get the userId in URL 
let userId = getUserId()
console.log('ID = '+ userId)

// Main component     
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
        if (activityData === "can not get user") {
            return null
        }
        else {
            setActivityData(activityData.data)
        }
        const mainData = await getUserData(userId)
        const perfData = await  getUserPerf(userId)
        const sessionData = await  getUserSessions(userId)
        setMainData(mainData.data)
        setPerfData(perfData.data)
        setSessionData(sessionData.data)
    }

    //Check if data is empty
    function dataEmptyCheck(data) {
        return Object.keys(data).length === 0 && data.constructor === Object;
    }
    
    // Load the "error" component if data is empty
    if(dataEmptyCheck(mainData) || dataEmptyCheck(activityData) || dataEmptyCheck(sessionData) || dataEmptyCheck(perfData))
        return (<div className="App">
            <Header />
            <div className="page-container">
                <Sider />
                <Error />
            </div>
        </div>)

    
    // Load the App component
    return (
    <div className="App">
      <Router>
      <Header />
      <div className="page-container">
        <Sider />
        <Routes>
            <Route path="user/*" element={<PageContent 
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

