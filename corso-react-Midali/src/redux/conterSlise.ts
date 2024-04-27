import { createSlice } from "@reduxjs/toolkit";
import { CounterState } from "../interfaces/CounterState";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0,
    } as CounterState,
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
        decrement: (state)=>{
            state.value -= 1
        }
    }
})

export const {increment, decrement} = counterSlice.actions
export const counterReducer = counterSlice.reducer