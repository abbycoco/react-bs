/**
 * Created by benben on 17/4/1.
 */
import xhr from './xhr/'
class Order {
    addTodb(data) {
        return xhr({
                method: 'post',
                url: '/orders/addorder',
                body: data
            }
        )
    }
}
export default new Order()
