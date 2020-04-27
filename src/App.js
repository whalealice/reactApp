import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './router';
import B from './component/testHOC/B'
import C from './component/testHOC/C'
import D from './component/testHOC/D'
import E from './component/testHOC/E'

function App() {
  return (
    <div className="App">
        {/*  学习高阶组件属性代理 */}
        {/*  <B name={"baifan"} age={18}/> */}
        {/*  <C/> */}
         {/*  学习高阶组件反向继承 */}
        {/*  <D/> */}
        {/*  <E/>
        {/*  <Tabbar/> */}
        <Router/>
    </div>
  );
}

export default App;
