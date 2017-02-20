import React from 'react'
import Navbar from 'COMPONENT/Navbar/'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import {RaisedButton} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
    // 组件形式的 Redux DevTools
    DevTools = require('COMPONENT/DevTools').default
}

const App = ({children, location}) => (<MuiThemeProvider>
        <div>
            <RaisedButton label="kjx"/>
            <Navbar location={location}/>

            <div className="container">
                {/* 相当于 Vue Demo 中的根 router-view */}
                { children }
            </div>
            { DevTools && <DevTools /> }
        </div>
    </MuiThemeProvider>
)

export default App
