import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    trigger: null,
    carForUpdate: null,
    loading: null,
    error: null
};


const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 3000));
            const {data} = await carService.getAll();
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            const {data} = await carService.create(car);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, carData}, thunkAPI) => {
        try {
            const {data} = await carService.updateById(id, carData);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id},thunkAPI) => {
        try {
            const {data} = await carService.deleteById(id);
            return thunkAPI.fulfillWithValue(data);
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false
            })
            // .addCase(create.fulfilled, state => {
            // })
            .addCase(updateById.fulfilled, state => {
                state.carForUpdate = null
            })
            // .addCase(getAll.pending, state => {
            //     state.loading = true
            // })
            // .addCase(getAll.rejected, (state, action) => {
            //     state.error = action.payload.detail
            //     state.loading = false
            // })
            .addMatcher(isFulfilled(create, updateById,deleteById), state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isFulfilled(getAll), state => {
                state.loading = false
                state.error = null
            })
            .addMatcher(isPending(getAll), state => {
                state.loading = true
            })
            .addMatcher(isRejected(getAll), (state, action) => {
                state.error = action.payload.detail
                state.loading = false
            })
});

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    updateById,
    deleteById
};

export {
    carReducer,
    carActions
}