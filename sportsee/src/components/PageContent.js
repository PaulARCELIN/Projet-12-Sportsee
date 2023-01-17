import React from "react";
import '../styles/page_content.css'
import Title from "./Title";
import KeyDataContainer from "./KeyDataContainer";
import AverageSession from "./AverageSession";
import RadarGraph from "./RadarGraph";
import ScoreGraph from "./Score";
import DailyActivity from "./DailyActivity";
import PropTypes from 'prop-types'


// First component with data
// 4 props, one for each endpoint
function PageContent({ userData, userActivity, userSessions, userPerf }) {

    let firstName = userData.userInfos.firstName
    let keyData = userData.keyData
    let dailySessionData = userActivity.sessions
    let averageSessionData = userSessions.sessions 
    
    //Data called "todayScore" or just "score" in other cases
    function getScore () {
        if(userData.todayScore) {
            let score = userData.todayScore
            return score 
        }
        else if(userData.score) {
            let score = userData.score
            return score 
        }
   }
    

    return (<div className="page_content">
        <Title firstName={firstName}/>
        <div className="data-content">
            <div className="graph-content">
                <div className="daily-activity">
                    <DailyActivity sessionData={dailySessionData}/>
                </div>   
                <div className="small-graphs-content">
                    <AverageSession sessionData={averageSessionData} />
                    <RadarGraph perfData={userPerf}/>
                    <ScoreGraph scoreData={getScore()}/>
                </div>         
            </div>
            <KeyDataContainer kal={keyData.calorieCount} pro={keyData.proteinCount} carbo={keyData.carbohydrateCount} lipid={keyData.lipidCount}/>
        </div>
    </div>)

}

export default PageContent

PageContent.propTypes = {
    userData: PropTypes.object,
    userActivity: PropTypes.object,
    userSessions: PropTypes.object,
    userPerf: PropTypes.object
}