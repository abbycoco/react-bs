const sel = (state = [], action) => {
    switch (action.type) {
        case 'CITY':
            return Object.assign({},
                ...state,
                action
            )
        default:
            return state
    }
}
export default sel