const initialState = { value: 0 }
export default function counterReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'counter/increment') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: state.value + action.payload
        }
    }
    if (action.type === 'counter/decrement') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: state.value - action.payload
        }
    }

    if (action.type === 'counter/length') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: state.value + action.payload
        }
    }
    // otherwise return the existing state unchanged
    return state
}