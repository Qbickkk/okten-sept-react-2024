import React from 'react';
import {useDispatch} from "react-redux";
import {counter2Actions} from "../redux/slice/counter2Slice";

const ComponentTwo = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(counter2Actions.inc())}>inc2</button>
            <button onClick={()=>dispatch(counter2Actions.dec())}>dec2</button>
            <button onClick={()=>dispatch(counter2Actions.reset(555))}>reset2</button>
        </div>
    );
};

export {ComponentTwo};