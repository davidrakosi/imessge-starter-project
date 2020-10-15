import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import chatReducer from "../features/chatSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});
