/**
 * Created by benben on 17/2/24.
 */
import React from 'react'
import {connect} from 'react-redux'
class My extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var name = '';
        var phone = '';
        if (this.props.logininfo !== undefined) {
            name = this.props.logininfo.session.name;
            phone = this.props.logininfo.session.phone;
        }
        return (<div style={{width: '100%', height: '100%'}}>
               <div>欢迎登陆 {name}</div>
                <div>{phone}</div>
            </div>
        )
    }
}
const loginState = (state = [], action) => {
    return state.logininfo
}
const mapStateToProps = (state, action) => ({
    logininfo: loginState(state, action)
})
export default connect(mapStateToProps)(My)
