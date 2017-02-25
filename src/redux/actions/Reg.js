import Login from '../../services/Login'
const loginin = (Data): Action => (dispatch) => {
    dispatch({
        type: 'LOGINING',
        info: '登录中'
    })
    Login.login(Data)
        .then(res => {
            console.log('res', res)
            if (res.code == 200) {
                dispatch({
                    type: 'LOGINSUCE',
                    info: res.msg,
                    session: Data
                })

            }
            else {
                dispatch({
                    type: 'LOGINERROR',
                    info: res.msg
                })
            }

        })

};
export {
    loginin
}