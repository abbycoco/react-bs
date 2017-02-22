/**
 * Created by benben on 17/2/21.
 */
const addUser = (Name): Action =>(dispatch)=>{
   dispatch({
       type: 'LOGIN',
       name: Name
   })
};
export {
    addUser
}