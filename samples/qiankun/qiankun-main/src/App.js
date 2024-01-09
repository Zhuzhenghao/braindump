// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import { Routes, Route,Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Link to={"/qiankun-app2"}>react子应用2cat</Link>|
      {/* <a href="/qiankun-app2/cat"> react子应用1  </a> | */}
      
      <a href="/qiankun-app1"> react子应用1  </a> |
      <a href="/qiankun-app2" > react子应用2 </a> |
      <a href="/qiankun-app3-vue" > vue子应用1 </a> |
      <div id="qiankun-app1"></div>
      <div id="qiankun-app2"></div>
      <div id="qiankun-app3-vue"></div>
    </div>
  );
}

export default App;
