import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";

const appStore = configureStore({
    reducer: {
        blog: blogReducer,
    }
})

export default appStore;