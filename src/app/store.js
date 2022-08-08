import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice";
import newUserReducer from "../redux/auth/newUserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    newUser: newUserReducer,
  },
});