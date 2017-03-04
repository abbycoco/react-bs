/**
 * Created by benben on 17/3/3.
 */
/**
 * Created by benben on 17/3/3.
 */
const sel = (state = [], action) => {
    switch (action.type) {
        case 'PROVINCE':
            return Object.assign({},
                ...state,
                action
            )
        default:
            return state
    }
}
export default sel