import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    info: "",
    playlist: "",
    currentList: "",
  },
  reducers: {
    updateInfo: (state, action) => {
      state.info = action.payload.info;
      return state;
    },
    updatePlaylist: (state, action) => {
      state.playlist = action.payload.playlist;
      return state;
    },
    updateCurrentList: (state, action) => {
      state.currentList = action.payload.currentList;
      return state;
    },
  },
});

export const {
  updateInfo,
  updatePlaylist,
  updateCurrentList
} = userSlice.actions;
export default userSlice.reducer;
