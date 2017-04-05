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
        var myname = '';
        var myphone = '';
        if (this.props.user !== undefined && this.props.user.session !== undefined) {
            myname = this.props.user.session.name;
            myphone = this.props.user.session.phone;
        }
        return (<div style={{width: '100%', height: '100%'}}>
               <div style={{width: '100%', height: '200px', textAlign: 'center'}}>欢迎登陆 {name}</div>
                <div style={{width: '100%'}}>
                    <AvgGrid sm={2} md={3} lg={4} className="am-thumbnails">
                        <li>
                            <div className="am-thumbnail">
                                <img src={me} alt=""/>
                                <p>{myname}</p>
                            </div>
                        </li>
                        <li>
                            <div className="am-thumbnail">
                            <img src={phone} alt=""/>
                            <p>{myphone}</p>
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
    return state.user
}
const mapStateToProps = (state, action) => ({
    user: loginState(state, action)
})
export default connect(mapStateToProps)(My)
