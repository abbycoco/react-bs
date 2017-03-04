/**
 * Created by benben on 17/2/22.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import checkinfo from './Checkinfo'
import logininfo from './Logininfo'
import address from './Address'
import addresscity from './Addresscity'
import addressdiqu from './Addressdiqu'
import sel from './selpro'
import selcity from './selcity'
import seldiqu from './seldiqu'
import user from './User'
const rootReducer = combineReducers({
    routing: routerReducer,
    logininfo,
    checkinfo,
    user,
    address,
    sel,
    selcity,
    seldiqu,
    addresscity,
    addressdiqu
})

export default rootReducer