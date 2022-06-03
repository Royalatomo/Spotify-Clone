import { createSlice } from "@reduxjs/toolkit";

const player = createSlice({
  name: "player",
  initialState: {
    trackId: "",
    playing: false,
    info: {
      img: "https://i.scdn.co/image/ab67616d00001e02925b6102fc5edac08ec995b5",
      name: "Little Do You Know",
      artists: ["Alex & Sierra"]
    }
  },
  reducers: {
    updateTrack: (state, action) => {
      const options = Object.keys(action.payload);
      for (let i of options) {
        state[i] = action.payload[i];
      }
      return state;
    },
  },
});

export const { updateTrack } = player.actions;
export default player.reducer;
