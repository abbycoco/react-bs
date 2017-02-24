/**
 * Created by sks on 16/10/10.
 */
import React from 'react'
import {connect} from 'react-redux'
import {TextField} from 'material-ui'
import {addUser} from '../redux/actions/Login'
import {FlatButton} from 'material-ui'
import {browserHistory} from 'react-router'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            password: ''
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
        })
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
        if (this.props.Islogin !== undefined && this.props.Islogin.type === 'LOGINSUC') {
            browserHistory.push('/mine')
        }
    }

    render() {
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
                /><br />
                <TextField
                    hintText="方便下次使用"
                    floatingLabelText="请输入密码"
                    onChange={this.showPwd}
                /><br />
                <FlatButton label="注册"
                            primary={true}
                            onClick={this.reg}
                />
            </div>
        )
    }
}
const loginState = (state = [], action) => {
    return state.loginsuc
}
const mapStateToProps = (state, action) => ({
    Islogin: loginState(state, action)
})
export default connect(mapStateToProps)(Login)
