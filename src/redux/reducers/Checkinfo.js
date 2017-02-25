/**
 * Created by benben on 17/2/24.
 */
const checkinfo = (state = [], action) => {
    switch (action.type) {
        case 'CHECKING':
            return Object.assign({},
                ...state,
                action
            )
        case 'CHECKSUC':
            return Object.assign({},
                ...state,
                action
            )
        case 'CHECKERR':
            return Object.assign({},
                ...state,
                action
            )
        default:
            return state
    }
}
export default checkinfo