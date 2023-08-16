import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    value: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.value.unshift(action.payload); //add new post at the top
    },
    addAllPost: (state, action) => {
      // console.log(...action.payload);
      state.value.push(...action.payload.reverse());
    },
  },
});

export const { addPost, addAllPost } = postSlice.actions;
export const selectPost = (state) => state.post.value;
export default postSlice.reducer;
