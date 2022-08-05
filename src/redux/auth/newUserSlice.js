import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newUser: null,
};

export const newUserSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.newUser = action.payload;
    },
    updateUser: (state, action) => {
      state.newUser = { ...state.newUser, ...action.payload };
    },
    delUser: (state, action) => {
      state.newUser = null;
    },
  },
});

export const { createUser, updateUser, delUser } = newUserSlice.actions;

export default newUserSlice.reducer;
