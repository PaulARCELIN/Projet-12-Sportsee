import { USER_ACTIVITY } from "../mocked data/mockedData";
import { USER_MAIN_DATA } from "../mocked data/mockedData";
import { USER_PERFORMANCE } from "../mocked data/mockedData";
import { USER_AVERAGE_SESSIONS } from "../mocked data/mockedData";

/**
 * 4 functions to get the mocked datas 
 * the datas are formated to be equal to the response.json of API calls
 */

export function getUserActivity(id) {
    
    let mockActivityData
    USER_ACTIVITY.forEach((e) => {
        if(id == e.userId){
            mockActivityData = e
        }
    }) 
    let mockData = new Object();
    mockData.data = mockActivityData
    return mockData

}

export function getUserData(id) {
    
    let mockMainData
    USER_MAIN_DATA.forEach((e) => {
        if(id == e.id){
            mockMainData = e
        }
    }) 
    let mockData = new Object();
    mockData.data = mockMainData
    return mockData
}

export function getUserPerf(id) {

    let mockPerfData
    USER_PERFORMANCE.forEach((e) => {
        if(id == e.userId){
            mockPerfData = e
        }
    }) 
    let mockData = new Object();
    mockData.data = mockPerfData
    return mockData

}

export function getUserSessions(id) {
    
    let mockSessionData
    USER_AVERAGE_SESSIONS.forEach((e) => {
        if(id == e.userId){
            mockSessionData = e
        }
    }) 
    let mockData = new Object();
    mockData.data = mockSessionData
    return mockData
}

