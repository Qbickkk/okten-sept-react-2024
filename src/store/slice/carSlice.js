import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    trigger: null,
    carForUpdate: null
};
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setAllCars: (state, action) => {
            state.cars = action.payload
        },
        trigger: state => {
            state.trigger = !state.trigger
        },
        setCarForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload
        }
    }
});

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions
};

export {
    carReducer,
    carActions
}