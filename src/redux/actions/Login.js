/**
 * Created by benben on 17/2/21.
 */
import Login from '../../services/Login'
const addUser = (Data): Action =>(dispatch)=>{
   dispatch({
       type: 'LOGIN',
       name: Data
   })
   Login.addTodb(Data)
       .then(dispatch({
           type: 'LOGINSUC',
           session: Data
       }))

};
export {
    addUser
}