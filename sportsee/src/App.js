/* fetch('http://localhost:3000/user/18')
  .then(res => res.json())
  .then(data => console.log(data.data)) */

import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
