/**
 * Created by benben on 17/2/21.
 */
import Login from '../../services/Login'
const addUser = (Data): Action => (dispatch) => {
    dispatch({
        type: 'LOGIN',
        info: '新增用户中'
    })
    Login.addTodb(Data)
        .then(res => {
            console.log('err', res)
            if (res.code !== 200) {
                dispatch({
                    type: 'LOGINERR',
                    info: res.msg
                })
            }
            else {
                dispatch({
                    type: 'LOGINSUC',
                    info: res.msg,
                    session: Data
                })
            }

        })

};
const checkphone = (phone): Action => (dispatch) =>{
    dispatch({
        type: 'CHECKING',
        info: '检测信息中'
    })
    Login.checkphone(phone)
        .then(
            res=> {
                if (res.code === 200) {
                    dispatch({
                        type: 'CHECKSUC',
                        info: res.msg
                    })
                }
                else {
                    dispatch({
                        type: 'CHECKERR',
                        info: res.msg
                    })
                }
            }
        )
}
export {
    addUser,
    checkphone
}