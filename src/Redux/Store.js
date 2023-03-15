import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "./Reducer"


const store = configureStore({
    reducer : {
        CountRedux : CountReducer
    }
})
export default store