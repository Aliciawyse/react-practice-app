const defaultState = {
    targets: []
}

export default (state=defaultState, action={}) => {
    switch (action.type) {
        case 'FETCH_TARGETS': {
            return {
                ...state,
                targets: action.payload
            }
        }
        default:
            return state;
    }
}