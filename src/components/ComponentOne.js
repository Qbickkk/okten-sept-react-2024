import React from 'react';
import {useDispatch} from "react-redux";
import {counterActions} from "../redux/slice/counterSlice";

const ComponentOne = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(counterActions.inc())}>inc1</button>
            <button onClick={()=>dispatch(counterActions.dec())}>dec1</button>
            <button onClick={()=>dispatch(counterActions.reset())}>reset1</button>
        </div>
    );
};

export {ComponentOne};