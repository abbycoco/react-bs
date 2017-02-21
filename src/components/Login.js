/**
 * Created by sks on 16/10/10.
 */
import React from 'react'
import { connect } from 'react-redux'
import {TextField} from 'material-ui'
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    showName = (event, newValue) =>{
        console.log(newValue);
        this.props.addUser(newValue);
    }

    render() {
        return (<div style={{width: '100%', height: '100%'}}>
                <TextField
                    hintText="起个名字吧"
                    floatingLabelText="请输入你的昵称"
                    onChange={this.showName}
                /><br />
            </div>
        )
    }
}
export default connect()(Login)
