//引入React核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom/client'
//引入APP组件
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import 'antd/dist/antd.css'



//渲染APP到页面
// ReactDOM.render(<App/>,document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  </React.StrictMode>
);