/**
 * Created by benben on 17/2/22.
 */
const login = (state = [], action) => {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({},
                ...state,
                action
            )
        default:
            return state
    }
}
export default login