import React from 'react'
import {Router, Route} from 'react-router'
import App from '../components/App'
import Login from '../components/Login'
import Reg from '../components/Reg'
import My from '../components/My'
import Order from '../components/Order'
import OrderSimple from '../components/OrderSimple'
const routes = (
    <Router>
        <Route path='/' components={App}>
            <Route path='/login' component={Login}/>
            <Route path='/reg' component={Reg}/>
            <Route path='/order' component={Order}/>
            <Route path='/mine' component={My}/>
            <Route path='/ordersimple' component={OrderSimple}/>
        </Route>
    </Router>
)

export default routes