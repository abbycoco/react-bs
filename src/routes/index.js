import React from 'react'
import {Router, Route} from 'react-router'
import App from '../components/App'
import Login from '../components/Login'
const routes = (
    <Router>
        <Route path='/' components={App}>
            <Route path='/login' component={Login}/>
        </Route>
    </Router>
)

export default routes