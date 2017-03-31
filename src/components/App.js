import React from 'react'
import {connect} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {browserHistory} from 'react-router'
var AMUIReact = require('amazeui-react');
var Navbar = AMUIReact.Navbar;
var data = [
    {
        title: '皮皮虾',
        link: '0',
        icon: 'car'
    },
    {
        title: '我',
        link: '1',
        icon: 'eye'
    },
    {
        title: '们',
        link: '2',
        icon: 'heart-o'
    },
    {
        title: '走',
        link: '3',
        icon: 'hand-paper-o'
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    handleSelect = (link, e) => {
        e.preventDefault();
        if (link == 0) {
            browserHistory.push('/order')
        }
        if (link == 1) {
            browserHistory.push('/ordersimple')
        }
        if (link == 2) {
            if (this.props.login !== undefined && this.props.login.type === 'LOGIN') {
                browserHistory.push('/mine')
            } else {
                browserHistory.push('/login')
            }
        }
        if (link == 3) {
            browserHistory.push('/mine')
        }
    };
    // show = (index) => {
    //     if (index == 0) {
    //         browserHistory.push('/order')
    //     }
    //     if (index == 1) {
    //         browserHistory.push('/ordersimple')
    //     }
    //     if (index == 2) {
    //         if (this.props.login !== undefined && this.props.login.type === 'LOGIN') {
    //             browserHistory.push('/mine')
    //         } else {
    //             browserHistory.push('/login')
    //         }
    //     }
    // }


    render() {
        return (
            <MuiThemeProvider>
                <div style={{
                    minHeight: '100%',
                    height: '100%',
                    margin: 0,
                    padding: 0,
                    position: 'relative'
                }}>
                    <main style={{
                        minHeight: '90%',
                        height: '90%'
                    }}>
                        <div className="container">
                            { this.props.children }
                        </div>
                    </main>
                    <Navbar
                        onSelect={this.handleSelect}
                        data={data}
                    />

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
