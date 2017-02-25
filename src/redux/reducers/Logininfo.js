/**
 * Created by benben on 17/2/24.
 */

const loginerr = (state = [], action) => {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({},
                ...state,
                action
            )
        case 'LOGINERR':
            return Object.assign({},
                ...state,
                action
            )
        case 'LOGINSUC':
            return Object.assign({},
                ...state,
                action
            )
        default:
            return state
    }
}
export default loginerr