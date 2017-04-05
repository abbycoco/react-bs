/**
 * Created by sks on 16/10/10.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {addUser, checkphone} from '../redux/actions/Login'
import {browserHistory} from 'react-router'
var AMUIReact = require('amazeui-react');
var Input = AMUIReact.Input;
var Button = AMUIReact.Button;
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            password: '',
            password1: ''
        }
    }
    showPhone = () => {
        this.setState({
            phone: this.refs.phonefield.getValue()
        });
        this.props.dispatch(checkphone({
            phone: this.refs.phonefield.getValue()
        }))

    }
    showPwd = () => {
        this.setState({
            password: this.refs.pwddfield.getValue()
        })

    }
    showPwd1 = () => {
        this.setState({
            password1: this.refs.pwddfield1.getValue()
        })

    }
    reg = () => {
        this.props.dispatch(addUser({
            name: this.state.name,
            phone: this.state.phone,
            password: this.state.password
        }));
        browserHistory.push('/order')
    }
    validate = () => {
        var length = this.state.name.length;
        if (length == 0 || length < 10 && length > 4) {
            return 'success';
        } else {
            return 'error';
        }
    }
    validatephone = () => {
        var length = this.state.phone.length;
        var pattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
        if (length == 0 || pattern.test(this.state.phone)) {
            return 'success';
        }
        else {
            return 'error';
        }
    }
    validatepwd = () => {

        var length = this.state.password.length;
        if (length == 0 || length < 10 && length > 4) {
            return 'success';
        } else {
            return 'error';
        }
    }
    validatepwd1 = () => {
        var length = this.state.password.length;
        if (length == 0 || length < 10 && length > 4 && this.state.password === this.refs.pwddfield1.getValue()) {
            return 'success';
        } else {
            return 'error';
        }
    }
    handleChange=()=> {
        this.setState({
            name: this.refs.namefield.getValue()
        });
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
        return (
            <div style={{width: '100%', height: '100%'}}>
                <Input
                    value={this.state.name}
                    placeholder="用户名 5-9 个字符"
                    label="用户名"
                    validation={this.validate()}
                    hasFeedback
                    ref="namefield"
                    onChange={this.handleChange}/>
                <Input
                    value={this.state.phone}
                    placeholder="请输入您的电话号码"
                    label="电话"
                    validation={this.validatephone()}
                    hasFeedback
                    ref="phonefield"
                    onChange={this.showPhone}/>
                <p style={{color: 'red', fontSize: '12px'}}>{tipinfo}</p>
                <Input
                    value={this.state.password}
                    placeholder=" 5-9 个字符"
                    label="密码"
                    validation={this.validatepwd()}
                    hasFeedback
                    ref="pwddfield"
                    onChange={this.showPwd}/>
                <Input
                    value={this.state.password1}
                    placeholder=" 5-9 个字符"
                    label="确认密码"
                    validation={this.validatepwd1()}
                    hasFeedback
                    ref="pwddfield1"
                    onChange={this.showPwd1}
                    />
                <Button
                    amStyle="success"
                    onClick={this.reg}
                    disabled={btnclick}
                    style={{width: '100%', textAlign: 'center', marginBottom: '10%', marginTop: '10%'}}
                >注册</Button>
                <Link to='/reg'>
                    <Button
                    amStyle="default"
                    style={{width: '100%', textAlign: 'center'}}
                >已有账号前去登录
                    </Button>
                </Link>
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
