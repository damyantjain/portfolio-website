import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const blogSlice = createSlice({
  name: "blogSlice",
  initialState: {
    blog: { title: "", description: "" },
    editedBlog: { title: "", description: "", contentBlocks: [] },
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
    updateContent: (state, action) => {
      state.editedBlog.contentBlocks[action.payload.index].content =
        action.payload.content;
    },
    addBlock: (state, action) => {
      action.payload = { ...action.payload, _id: uuidv4() };
      state.editedBlog.contentBlocks.push(action.payload);
    },
    deleteBlock: (state, action) => {
      state.editedBlog.contentBlocks = state.editedBlog.contentBlocks.filter((x) => x._id !== action.payload);
    },
  },
});
export const {
  addBlog,
  updateTitle,
  updateDescription,
  updateContent,
  addBlock,
  deleteBlock,
} = blogSlice.actions;
export default blogSlice.reducer;
