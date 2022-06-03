import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import playerReducer from "./slice/playerSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        player: playerReducer,
    }
});

export default store;
