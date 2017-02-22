import React from 'react'
import {render} from 'react-dom'
// 引入redux
import {Provider} from 'react-redux'
// 引入router
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import routes from './routes/index'
import configureStores from './redux/reducers/configureStore'
import DevTools from './redux/reducers/reduxDevTool'
import rootReducer from './redux/reducers/rooterReducer'

const store = configureStores(rootReducer)  // 路由的store*/
const history = syncHistoryWithStore(browserHistory, store)
render(
    (
        <Provider store={store}>
            <div style={{minHeight: '100%', height: '100%', margin: 0, padding: 0, position: 'relative'}}>
                <Router history={history} routes={routes}/>
                 <DevTools/>
            </div>
        </Provider>
    ),
    document.getElementById('app')
)