const user = (state = [], action) => {
    switch (action.type) {
        case 'LOGINING':
            return Object.assign({},
                ...state,
                action
            )
        case 'LOGINERROR':
            return Object.assign({},
                ...state,
                action
            )
        case 'LOGINSUCE':
            return Object.assign({},
                ...state,
                action
            )
        default:
            return state
    }
}
export default user