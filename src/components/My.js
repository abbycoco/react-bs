/**
 * Created by benben on 17/2/24.
 */
/**
 * Created by sks on 16/10/10.
 */
import React from 'react'
import {connect} from 'react-redux'
class My extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div style={{width: '100%', height: '100%'}}>
               <div>欢迎登陆</div>
            </div>
        )
    }
}
const mapStateToProps = (state, action) => ({
})
export default connect(mapStateToProps)(My)
