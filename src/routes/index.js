import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Login from '../components/App'
const routes = (
    <Route path="/">
      <IndexRoute component={Login}/>
    </Route>
)

export default routes