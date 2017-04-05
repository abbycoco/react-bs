/**
 * Created by benben on 17/4/1.
 */
import Order from '../../services/Order'
const addOrder = (Data): Action => (dispatch) => {
    dispatch({
        type: 'ADDORDER',
        info: '新增订单中'
    })
    console.log(Data)
    Order.addTodb(Data)
        .then(res => {
            console.log('err', res)
            if (res.code !== 200) {
                dispatch({
                    type: 'ADDORDERERR',
                    info: res.msg
                })
            }
            else {
                dispatch({
                    type: 'ADDORDERSUC',
                    info: res.msg
                })
            }

        })

};
export {addOrder}