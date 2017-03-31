/**
 * Created by benben on 17/2/24.
 */
import React from 'react'
import {connect} from 'react-redux'
import me from './../assets/img/wangwang.png'
import navigation from './../assets/img/navigation.png'
import phone from './../assets/img/phone.png'
var AMUIReact = require('amazeui-react');
var AvgGrid = AMUIReact.AvgGrid;
class My extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var name = '';
        // var phone = '';
        if (this.props.logininfo !== undefined && this.props.logininfo.session !== undefined) {
            name = this.props.logininfo.session.name;
            // phone = this.props.logininfo.session.phone;
        }
        return (<div style={{width: '100%', height: '100%'}}>
               <div style={{width: '100%', height: '200px', textAlign: 'center'}}>欢迎登陆 {name}</div>
                <div style={{width: '100%'}}>
                    <AvgGrid sm={2} md={3} lg={4} className="am-thumbnails">
                        <li>
                            <div className="am-thumbnail">
                                <img src={me} alt=""/>
                                <p>姓名</p>
                            </div>
                        </li>
                        <li>
                            <div className="am-thumbnail">
                            <img src={phone} alt=""/>
                            <p>电话</p>
                            </div>
                        </li>
                        <li>
                            <div className="am-thumbnail">
                            <img src={navigation} alt=""/>
                            <p>行程</p>
                            </div>
                        </li>
                        <li>
                            <div className="am-thumbnail">
                                <img src={navigation} alt=""/>
                                <p>车</p>
                            </div>
                        </li>
                       </AvgGrid>
                </div>
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
