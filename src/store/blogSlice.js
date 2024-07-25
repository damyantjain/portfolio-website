import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blogSlice",
    initialState: {
        blog: {}
    },
    reducers: {
        addBlog: (state, action) => {
            state.blog = action.payload;
        }
    }
})
export const { addBlog } = blogSlice.actions;
export default blogSlice.reducer;