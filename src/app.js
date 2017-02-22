import React from 'react'
import {render} from 'react-dom'
// 引入redux
import {Provider} from 'react-redux'
// 引入router
import {Router, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import routes from './routes/index'
import configureStores from './configureStore'
import DevTools from './redux/reducers/reduxDevTool'
import rootReducer from './redux/reducers/rooterReducer'

const store = configureStores(rootReducer)  // 路由的store*/

function createElements () {
    if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
        return (
            <DevTools />
        )
    }
}
const history = syncHistoryWithStore(hashHistory, store)
render(
    (
        <Provider store={store}>
            <div className="devtools">
                <Router history={history} routes={routes}/>
                {createElements()}
            </div>
        </Provider>
    ),
    document.getElementById('app')
)