/**
 * Created by sks on 16/10/10.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {TextField} from 'material-ui'
import {addUser, checkphone} from '../redux/actions/Login'
import {FlatButton} from 'material-ui'
// import {browserHistory} from 'react-router'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            password: '',
        }
    }

    showName = (event, newValue) => {
        this.setState({
            name: newValue
        });
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
    reg = () => {
        this.props.dispatch(addUser({
            name: this.state.name,
            phone: this.state.phone,
            password: this.state.password
        }));
    }

    render() {
        var tipinfo = '';
        var btnclick = true;
        if (this.state.name !== '' && this.state.phone !== '' && this.state.password !== '' && this.props.checkinfo.type === 'CHECKSUC') {
            btnclick = false;
        }
        if (this.props.checkinfo !== undefined) {
                tipinfo = this.props.checkinfo.info;
        }
        return (<div style={{width: '100%', height: '100%'}}>
                <TextField
                    hintText="真实姓名哦"
                    floatingLabelText="请输入你的昵称"
                    onChange={this.showName}
                /><br />
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
                <FlatButton label="注册"
                            primary={true}
                            onClick={this.reg}
                            disabled={btnclick}
                /><br />
                <Link to = '/reg'> 已有账号前去登录</Link>
            </div>
        )
    }
}
const logininfo = (state = [], action) => {
    return state.logininfo
}
const checkinfo = (state = [], action) => {
    return state.checkinfo
}
const mapStateToProps = (state, action) => ({
    logininfo: logininfo(state, action),
    checkinfo: checkinfo(state, action)
})
export default connect(mapStateToProps)(Login)
