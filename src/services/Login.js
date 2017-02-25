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
    };

    checkphone(phone) {
        return xhr({
            method: 'get',
            url: '/users/checkuser',
            body: phone
        })
    };

    login(data) {
        return xhr({
                method: 'get',
                url: '/users/login',
                body: data
            }
        )
    }
}
export default new Login()
