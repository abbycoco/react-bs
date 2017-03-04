/**
 * Created by benben on 17/3/3.
 */
const address = (state = [], action) => {
    switch (action.type) {
        case 'ADDRESS':
            return Object.assign({},
                ...state,
                action
            )
        default:
            return state
    }
}
export default address