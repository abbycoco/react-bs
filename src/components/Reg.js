/**
 * Created by benben on 17/2/25.
 */
/**
 * Created by sks on 16/10/10.
 */
import React from 'react'
import {connect} from 'react-redux'
import {TextField} from 'material-ui'
import {FlatButton} from 'material-ui'
import {checkphone} from '../redux/actions/Login'
import {loginin} from '../redux/actions/Reg'
import {Link} from 'react-router'
// import {browserHistory} from 'react-router'
class Reg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: '',
        }
    }
    showPhone = (event, newValue) => {
        this.setState({
            phone: newValue
        });
        this.props.dispatch(checkphone({
            phone: newValue
        }))
    }
    showPwd = (event, newValue) => {
        this.setState({
            password: newValue
        })
    }
    login = () => {
        this.props.dispatch(loginin({
            phone: this.state.phone,
            password: this.state.password
        }));
    }
    render() {
        var tipinfo = '';
        var btnclick = true;
        if (this.state.phone !== '' && this.state.password !== '' && this.props.checkinfo !== undefined && this.props.checkinfo.type === 'CHECKERR') {
            btnclick = false;
        }
        if (this.props.checkinfo !== undefined) {
            tipinfo = this.props.checkinfo.info;
        }
        var user = '';
        if (this.props.user !== undefined) {
            user = this.props.user.info
        }
        return (<div style={{width: '100%', height: '100%'}}>
                <TextField
                    hintText="确认能拨打电话的"
                    floatingLabelText="请输入你的电话"
                    onChange={this.showPhone}
                    errorText={tipinfo}
                /><br />
                <TextField
                    hintText="方便下次使用"
                    floatingLabelText="请输入密码"
                    onChange={this.showPwd}
                /><br />
                {user}
                <br />
                <FlatButton label="登录"
                            primary={true}
                            onClick={this.login}
                            disabled={btnclick}
                /><br />
                <Link to = '/login'> 木有账号快去注册</Link>
            </div>
        )
    }
}
const checkinfo = (state = [], action) => {
    return state.checkinfo
}
const user = (state = [], action) => {
    return state.user
}
const mapStateToProps = (state, action) => ({
    checkinfo: checkinfo(state, action),
    user: user(state, action)
})
export default connect(mapStateToProps)(Reg)
