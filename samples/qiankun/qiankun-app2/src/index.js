import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './public-path';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
 export async function bootstrap() {
  console.log('react app bootstraped');
}
function render(props) {
  const { container } = props;
  console.log(container,'==================================')
  const root =    container ?  createRoot(container.querySelector('#root')) : createRoot(document.getElementById('root'))
  root.render( 
   <Router basename={window.__POWERED_BY_QIANKUN__ ? '/qiankun-app2' : '/'}>
    <App />
  </Router>);
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("🚀 ~ file: index.js:18 ~ mount ~ props2222:", props)
  render(props)
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  // const { container } = props;
  // console.log(container,'===========un=======================')

  // const root =  window.__POWERED_BY_QIANKUN__  ?  createRoot(container.querySelector('#root')) : createRoot(document.getElementById('root'))
  // root.unmount();

  // ReactDOM?.unmountComponentAtNode(
  //   props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  // );
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
