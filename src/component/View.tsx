import React, { Component,Suspense } from 'react'
import router from "../router"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom"

class View extends Component {
    render() {
        return (
            <>
                <Suspense fallback={<></>}>
                    <Router>
                        <Switch>
                            <Router>
                                <Redirect to={'/register'}/>
                            </Router>
                            {
                                router.map(r=> (
                                    <Route key={r.key} exact={r.exact} path={r.path}>{r.component}</Route>
                                ))
                            }
                        </Switch>
                    </Router>
                </Suspense>
            </>
        )
    }
}

export default View;