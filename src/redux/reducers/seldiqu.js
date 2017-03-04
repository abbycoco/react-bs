/**
 * Created by benben on 17/3/4.
 */
const sel = (state = [], action) => {
    switch (action.type) {
        case 'DIQU':
            return Object.assign({},
                ...state,
                action
            )
        default:
            return state
    }
}
export default sel