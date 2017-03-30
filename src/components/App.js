import React from 'react'
import {connect} from 'react-redux'
import TabBar from 'COMPONENT/TabBar'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
var AMUIReact = require('amazeui-react');
var Navbar = AMUIReact.Navbar;
var data = [
    {
        title: '呼叫',
        link: 'tel:123456789',
        icon: 'phone'
    },
    {
        title: 'GitHub',
        link: 'https://github.com/allmobilize/amazeui',
        icon: 'github'
    },
    {
        title: '下载使用',
        link: 'http://amazeui.org/getting-started',
        icon: 'download'
    },
    {
        title: 'Bug 反馈',
        link: 'https://github.com/allmobilize/amazeui/issues',
        icon: 'location-arrow'
    }
];

var handleSelect = function(link, e) {
    e.preventDefault();
    console.log('你点击了：', link);
};
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {browserHistory} from 'react-router'
class App extends React.Component {
    constructor(props) {
        super(props);

    }

    show = (index) => {
        if (index == 0) {
            browserHistory.push('/order')
        }
        if (index == 1) {
            browserHistory.push('/ordersimple')
        }
        if (index == 2) {
            if (this.props.login !== undefined && this.props.login.type === 'LOGIN') {
                browserHistory.push('/mine')
            } else {
                browserHistory.push('/login')
            }
        }
    }


    render() {
        return (
            <MuiThemeProvider>
                <div style={{minHeight: '100%', height: '100%', margin: 0, padding: 0, position: 'relative'}}>
                    <main style={{minHeight: '90%', height: '90%'}}>
                        <div className="container">
                            { this.props.children }
                        </div>
                    </main>
                    <Navbar onSelect={handleSelect} data={data} />
                    <footer style={{position: 'absolute', width: '100%', height: '10%', bottom: '0'}}>
                        <TabBar show={this.show}/>
                    </footer>
                </div>
            </MuiThemeProvider>
        )
    }
}
const logininfo = (state = [], action) => {
    return state.login
}
const mapStateToProps = (state, action) => ({
    login: logininfo(state, action)
})

export default connect(mapStateToProps,
    mapStateToProps
)(App)
