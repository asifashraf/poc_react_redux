import axios from "axios";
export function fetch(page) {
    return async dispatch => {
        const data = await axios.get("https://reqres.in/api/users?page=" + page);
        dispatch({
            type: 'users/fetch',
            payload: data.data
        });
    };
}

export function add(id, email) {
    return {
        type: "users/add",
        payload: {
            id, email
        }
    };
}

export function pop() {
    return {
        type: "users/pop"
    };
}