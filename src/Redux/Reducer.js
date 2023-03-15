import { createSlice } from "@reduxjs/toolkit";

const CountSlice = createSlice({
    name : "Count",
    initialState : {
        count : 0,
        data : [
           {title : "Simo", body :"7827"},
           {title : "Rabie", body :"7827"},
           {title : "Mifdal", body :"7827"},
           {title : "Hamid", body :"7827"}
        ]

    },
    reducers : {
        
        increment(state){
           state.count = state.count +1 
        },
        decrement(state){
            state.count = state.count-1
        },
        add(state, action){

            state.count = state.count + action.payload

        }

    }

})

export const {increment, decrement, add} = CountSlice.actions

export default CountSlice.reducer