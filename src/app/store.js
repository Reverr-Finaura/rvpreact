import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/auth/userSlice";
import newUserReducer from "../redux/auth/newUserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    newUser: newUserReducer,
  },
});
