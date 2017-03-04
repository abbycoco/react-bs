/**
 * Created by benben on 17/3/4.
 */
const address = (state = [], action) => {
    switch (action.type) {
        case 'ADDRESSCITY':
            return Object.assign({},
                ...state,
                action
            )
        default:
            return state
    }
}
export default address