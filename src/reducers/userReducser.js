const initialState = { users: [] }
export default function userReducer(state = initialState, action) {
    const users = state.users;
    switch (action.type) {
        case 'users/fetch':
            return {
                ...state,
                users: [...users, ...action.payload.data]
            };

        case "users/add":
            users.push({
                ...action.payload
            },);
            return {
                ...state,
                users: [...users]
            };

        case "users/pop":
            users.pop();
            return {
                ...state,
                users: [...users]
            };
        default: return state;
    }
}