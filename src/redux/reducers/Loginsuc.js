/**
 * Created by benben on 17/2/24.
 */
const login = (state = [], action) => {
    switch (action.type) {
        case 'LOGINSUC':
            return Object.assign({},
                ...state,
                action
            )
        default:
            return state
    }
}
export default login