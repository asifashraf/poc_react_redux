import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "./actions/userActions";


export default function Users(){
    const userStore = useSelector(state => state.users);
    let [pageNum, setPageNum] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        loadUsers();
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
    <button type="button" onClick={() => loadUsers()}>Add more users</button>
    <button type="button" onClick={() => addUser()}>Add user</button>
    <button type="button" onClick={() => removeUser()}>Remove last user</button>
    </>;

    function loadUsers(){
        const newPageNum = pageNum + 1;
        setPageNum(newPageNum);
        dispatch(userActions.fetch(newPageNum));
    }

    function addUser(){
        const date = new Date();
        dispatch(userActions.add(date.toDateString(), 'asif@gmail.com'));
    }

    function removeUser(){
        dispatch(userActions.pop());

    }
}

