import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const blogSlice = createSlice({
  name: "blogSlice",
  initialState: {
    blog: { title: "", description: "" },
    editedBlog: { title: "", description: "", image: "", contentBlocks: [] },
  },
  reducers: {
    //blog
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
    updatePreviewImage: (state, action) => {
      state.editedBlog.image = action.payload;
    },

    updateContent: (state, action) => {
      var index = state.editedBlog.contentBlocks.findIndex(
        (x) => x._id === action.payload._id
      );

      state.editedBlog.contentBlocks[index].content = action.payload.content;
    },
    updateCaption: (state, action) => {
      var index = state.editedBlog.contentBlocks.findIndex(
        (x) => x._id === action.payload._id
      );

      state.editedBlog.contentBlocks[index].caption = action.payload.caption;
    },

    //block
    addBlock: (state, action) => {
      action.payload = { ...action.payload, _id: uuidv4() };
      if (state.editedBlog.contentBlocks === undefined) {
        state.editedBlog.contentBlocks = [];
      }
      state.editedBlog.contentBlocks.push(action.payload);
    },
    deleteBlock: (state, action) => {
      state.editedBlog.contentBlocks = state.editedBlog.contentBlocks.filter(
        (x) => x._id !== action.payload
      );
    },
    reorderBlocks: (state, action) => {
      state.editedBlog.contentBlocks = action.payload;
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
  updateCaption,
  updatePreviewImage,
  reorderBlocks,
} = blogSlice.actions;
export default blogSlice.reducer;
