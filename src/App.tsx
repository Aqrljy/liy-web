import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './component/Homepage/Homepage'

// import View from './component/View';


function App(){
    return (
        <div>
            <Homepage/>
            <div>
                <div>
                    <NavLink to="/login" title="Login">登录</NavLink>
                    <NavLink to="/register" title="Register">注册</NavLink>
                </div>
                <div>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App;
