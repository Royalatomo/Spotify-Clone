import React from "react";
import "./styles/song-row.css";
import { useDispatch } from "react-redux";
import { updateTrack } from "../app/slice/playerSlice";

const SongRow = ({ track, order, spotify }) => {
  const dispatch = useDispatch();

  const playSong = (e) => {
    const song = e.currentTarget;
    const img = song.querySelector("img").src;
    const name = song.querySelector("h2").innerText;
    const artists = song.querySelector("p").innerText.split(", ");
    const currentPlaying = { img, name, artists };

    dispatch(
      updateTrack({ trackId: track.id, playing: true, info: currentPlaying })
    );
  };

  // Premium Required
  // const play = () => {
  //   spotify.play({
  //     uris: [track.uri],
  //   });
  // };

  return (
    <div className="song-row" onClick={playSong}>
      <h4>{order}</h4>
      <img src={track.album.images[0].url} alt="" />
      <div className="song-row__info">
        <h2>{track.name}</h2>
        <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
      </div>
    </div>
  );
};

export default SongRow;
