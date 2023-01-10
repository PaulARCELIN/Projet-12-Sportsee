import Header from "./components/Header";
import "./styles/body.css"
import Sider from "./components/Sider";
import PageContent from "./components/PageContent";
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "./mocked data/mockedData";

/* import getUserActivity from "./api/UserActivity";

async function test(id) {
    let datatest = await getUserActivity(id)
    console.log(datatest)
    return datatest
}

console.log(test(18)) */


const search = window.location.search
const params = new URLSearchParams (search)
const userId = params.get ('id')



let userMainData = {}

    USER_MAIN_DATA.forEach((e) => {
        if(userId == e.id){
            userMainData = e
        }
    })

let userActivityData = {}

    USER_ACTIVITY.forEach((e) => {
        if(userId == e.userId){
            userActivityData = e
        }
    })    

let userAverageSessions = {}

    USER_AVERAGE_SESSIONS.forEach((e) => {
        if(userId == e.userId){
            userAverageSessions = e
        }
    })

let userPerformance = {}

    USER_PERFORMANCE.forEach((e) => {
        if(userId == e.userId){
            userPerformance = e
        }
    })
    
function App() {
  
    return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Sider />
        <PageContent userData={userMainData} userActivity={userActivityData} userSessions={userAverageSessions} userPerf={userPerformance}/>
      </div>
    </div>
  );
}

export default App;


/* const [user, setUser] = useState({})
    
    function getInfos() {
        getUserData(userId)
            .then(({data}) => setUser(data));     
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
    
    if(!user.keyData) {
        return null  
    }
    else {
        console.log(user.keyData)
    }   
    
    const keyData = user.keyData */