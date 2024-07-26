import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogSlice",
  initialState: {
    blog: { title: "", description: "" },
    editedBlog: { title: "", description: "" },
  },
  reducers: {
    addBlog: (state, action) => {
      state.blog = action.payload;
      state.editedBlog = action.payload;
    },
    updateTitle: (state, action) => {
      state.editedBlog.title = action.payload;
    },
    updateDescription: (state, action) => {
      state.editedBlog.description = action.payload;
    },
  },
});
export const { addBlog, updateTitle, updateDescription } = blogSlice.actions;
export default blogSlice.reducer;
