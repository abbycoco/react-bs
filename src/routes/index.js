import React from 'react'
import {Router, Route} from 'react-router'
import App from '../components/App'
import Login from '../components/Login'
import My from '../components/My'
const routes = (
    <Router>
        <Route path='/' components={App}>
            <Route path='/login' component={Login}/>
            <Route path='/mine' component={My}/>
        </Route>
    </Router>
)

export default routes