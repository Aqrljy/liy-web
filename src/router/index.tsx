import React, { ReactNode,lazy } from "react";
import Register from "src/pages/Register";
import Login from "src/pages/Login";

// const Login = lazy(() => import('../pages/Login'))
const Page404 = lazy(() => import('../pages/Page404'))

interface IRouter{
    title: string
    path: string
    key: string
    exact?: boolean
    component?: ReactNode
    children?: IRouter[] 
}
const router: IRouter[] = [
    {
        path: '/register',
        exact: true,
        title: '注册',
        key: "register",
        component: <Register/>
    }
]
 export const unAuthRouter: IRouter[] =[
    {
        path: '/login',
        title: '登录',
        key: "login",
        component: <Login/>
    },
    {
        path: '*',
        title: '404',
        key: "404",
        exact: false,
        component: <Page404/>
    }
]

export default router