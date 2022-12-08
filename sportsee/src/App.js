import Header from "./components/Header";
import "./styles/body.css"
import Sider from "./components/Sider";
import PageContent from "./components/PageContent";
import Api from "./Api";

function App() {
  Api()
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Sider />
        <PageContent />
      </div>
    </div>
  );
}

export default App;
