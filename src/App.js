import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl, tokenExpired } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch } from "react-redux";
import {
  updateInfo,
  updatePlaylist,
  updateCurrentList,
} from "./app/slice/userSlice";

const spotify = new SpotifyWebApi();

const App = () => {
  const lsToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(lsToken ? lsToken.value : "");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !tokenExpired()) {
      spotify.setAccessToken(token);
      setToken(token);

      spotify.getMe().then((info) => {
        dispatch(updateInfo({ info }));
      });

      spotify.getUserPlaylists().then((playlist) => {
        console.log(playlist)
        dispatch(updatePlaylist({ playlist }));
      });

      spotify.getPlaylist("5a0usQ20pVsRKGA1TDPf9b").then((songs) => {
        dispatch(updateCurrentList({ currentList: songs }));
      });
      return;
    }

    const _token = getTokenFromUrl();
    if (!_token) return;
    setToken(_token);
    spotify.setAccessToken(_token);

    spotify.getMe().then((info) => {
      dispatch(updateInfo({ info }));
    });

    spotify.getUserPlaylists().then((playlist) => {
      dispatch(updatePlaylist({ playlist }));
    });

    spotify.getPlaylist("37i9dQZF1DXbYM3nMM0oPk").then((songs) => {
      dispatch(updateCurrentList({ currentList: songs }));
      console.log(songs);
    });

    // eslint-disable-next-line
  }, []);

  return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>;
};

export default App;
