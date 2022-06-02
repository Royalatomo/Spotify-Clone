import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    info: "",
    playlist: "",
    currentList: "",
    currentPlaying: {
      img: "https://i.scdn.co/image/ab67616d00001e02925b6102fc5edac08ec995b5",
      name: "Little Do You Know",
      artists: ["Alex & Sierra"]
    },
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

    updateCurrentPlaying: (state, action) => {
      state.currentPlaying = action.payload.currentPlaying;
      return state;
    },
  },
});

export const {
  updateInfo,
  updatePlaylist,
  updateCurrentList,
  updateCurrentPlaying,
} = userSlice.actions;
export default userSlice.reducer;
