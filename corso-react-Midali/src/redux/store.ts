import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./conterSlise";

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})
