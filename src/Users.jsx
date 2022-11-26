import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "./actions/userActions";


export default function Users(){
    const userStore = useSelector(state => state.users);
    let [pageNum, setPageNum] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        loadUsers(dispatch, ++pageNum, setPageNum);
    }, [dispatch]);
    return <>
    <div>Users List: Current page: {pageNum}</div>
    <ul>
        {
        userStore.users.map(user => <li key={user.id}>
            {user.id} - {user.email}
        </li>)
        }
    </ul>
    <button type="button" onClick={() => loadUsers(dispatch, ++pageNum, setPageNum)}>Add more users</button>
    <button type="button" onClick={() => addUser(dispatch)}>Add user</button>
    <button type="button" onClick={() => removeUser(dispatch)}>Remove last user</button>
    </>;
}

function loadUsers(dispatch, pageNum, setPageNum){
    setPageNum(pageNum);
    dispatch(userActions.fetch(pageNum));
}

function addUser(dispatch){
    const date = new Date();
    dispatch(userActions.add(date.toDateString(), 'asif@gmail.com'));
}

function removeUser(dispatch){
    dispatch(userActions.pop());

}