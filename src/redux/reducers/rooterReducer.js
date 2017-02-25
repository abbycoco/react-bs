/**
 * Created by benben on 17/2/22.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import checkinfo from './Checkinfo'
import logininfo from './Logininfo'
import user from './User'
const rootReducer = combineReducers({
    routing: routerReducer,
    logininfo,
    checkinfo,
    user
})

export default rootReducer