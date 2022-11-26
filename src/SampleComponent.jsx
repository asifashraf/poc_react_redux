import { useSelector, useDispatch, Provider } from "react-redux";
import {increment, decrement, length} from "./actions/counterActions";
export default function SampleComponent(){
    const counter = useSelector(state => state.counter);
    const userStore = useSelector(state => state.users);
    const dispatch = useDispatch();
    
    const up = () => {
        dispatch(increment(3));
    };

    const down = () => {
        dispatch(decrement(3));
    };

    const len = () => {
        dispatch(length());
    };
    return <>
    <div>Sample component: {counter.value}
        <button onClick={up}>add</button>
        <button onClick={down}>rem</button>
        <button onClick={len}>len</button>
        </div>
    <div>Number of users in another component: {userStore.users.length}</div>
    </>;
    
}