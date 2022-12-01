/* fetch('http://localhost:3000/user/18')
  .then(res => res.json())
  .then(data => console.log(data.data)) */

import Header from "./components/Header";
import "./styles/body.css"
import Sider from "./components/Sider";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Sider />
        
      </div>
    </div>
  );
}

export default App;
