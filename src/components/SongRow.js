import React from "react";
import "./styles/song-row.css";
import { useDispatch } from "react-redux";
import { updateCurrentPlaying } from "../app/slice/userSlice";

const SongRow = ({ track }) => {
  const dispatch = useDispatch();

  const updateFooter = (e) => {
    const song = e.currentTarget;
    const img = song.querySelector("img").src;
    const name = song.querySelector("h2").innerText;
    const artists = song.querySelector("p").innerText.split(", ");
    const currentPlaying = {img, name, artists}
    dispatch(updateCurrentPlaying({ currentPlaying }));
  };

  return (
    <div className="song-row" onClick={updateFooter}>
      <img src={track.album.images[0].url} alt="" />
      <div className="song-row__info">
        <h2>{track.name}</h2>
        <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
      </div>
    </div>
  );
};

export default SongRow;
