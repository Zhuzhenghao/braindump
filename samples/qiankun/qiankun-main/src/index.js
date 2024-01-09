import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import {createRoot} from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start, initGlobalState } from 'qiankun';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const state = {
  person: {
    name: '张三',
    age: 18,
  }
}
// 初始化 state
const actions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
setTimeout(() => {
  actions.setGlobalState({ ...state, age: 19 });

}, 1000)
actions.offGlobalStateChange();

registerMicroApps([
  {
    name: 'react-app1', // app name registered
    entry: '//localhost:3011',
    container: '#qiankun-app1',
    activeRule: '/qiankun-app1',

  },
  {
    name: 'react-app2',
    entry: '//localhost:3012',
    container: '#qiankun-app2',
    activeRule: '/qiankun-app2',
    props: {
      person: {
        name: '李四',
        age: 20,
      }

    }

    },
    {
      name: '"qiankun-app3-vue',
      entry: '//localhost:3013',
      container: '#qiankun-app3-vue',
      activeRule: '/qiankun-app3-vue',
    }
  
]);
start()
const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <Router>

        <App />
      </Router>
    </React.StrictMode>
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
