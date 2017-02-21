import React from 'react'
import TabBar from 'COMPONENT/TabBar'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { browserHistory } from 'react-router'

let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
    // 组件形式的 Redux DevTools
    DevTools = require('COMPONENT/DevTools').default
}
const show = (index)=>{
    console.log(index);
    if (index == 0) {
        browserHistory.push('/msg')
    }if (index == 1) {
        browserHistory.push('/todo')
    }if (index == 2) {
        browserHistory.push('/')
    }
}
const App = ({children, location}) => (<MuiThemeProvider>
        <div style={{minHeight: '100%', height: '100%', margin: 0, padding: 0, position: 'relative'}}>
            <main style={{minHeight: '90%', height: '90%'}}>
                <div className="container">
                    { children }
                </div>
            </main>
            <footer style={{position: 'absolute', width: '100%', height: '10%'}}>
                <TabBar show={show}/>
            </footer>
            { DevTools && <DevTools /> }
        </div>
    </MuiThemeProvider>
)

export default App
