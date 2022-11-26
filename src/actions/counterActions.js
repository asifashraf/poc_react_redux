import axios from "axios";
export function increment(by) {
    return {
        type: 'counter/increment',
        payload: by
    };
}

export function decrement(by) {
    return {
        type: 'counter/decrement',
        payload: by
    };
}

export function length() {
    return async dispatch => {
        const data = await axios.get("https://reqres.in/api/users?page=2");
        dispatch({
            type: 'counter/length',
            payload: data.data.data.length
        });
    };
}