/**
 * Created by benben on 17/2/22.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import login from './Login'
import loginsuc from './Loginsuc'
const rootReducer = combineReducers({
    routing: routerReducer,
    login,
    loginsuc
})

export default rootReducer