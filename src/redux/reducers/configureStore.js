import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import DevTools from './reduxDevTool'


// 调用日志打印方法
const loggerMiddleware = createLogger()

// 创建一个中间件集合
const middleware = [thunk, loggerMiddleware];
let configureStore
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
    configureStore = compose(
        applyMiddleware(...middleware),
        DevTools.instrument()
    )(createStore);
}else {
    configureStore = compose(
        applyMiddleware(thunk),
        DevTools.instrument()
    )(createStore);
}

// 利用compose增强store，这个 store 与 applyMiddleware 和 redux-devtools 一起使用


export default configureStore