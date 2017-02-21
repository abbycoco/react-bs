/**
 * Created by benben on 17/2/21.
 */
import xhr from './xhr/'
class  Login{
    addTodb(Name){
        return xhr({
            method: 'get',
            url: '/addUser',
            body: Name
        })
    }
}
export default new Login()
