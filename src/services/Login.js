/**
 * Created by benben on 17/2/21.
 */
import xhr from './xhr/'
class Login {
    addTodb(Data) {
        return xhr({
            method: 'get',
            url: '/users/addUser',
            body: Data
        })
    }
}
export default new Login()
