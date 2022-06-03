import React from "react";
import "./styles/home.css";
import HomeHeader from "./HomeHeader";
import SongRow from "./SongRow";
import { useSelector } from "react-redux";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";

const Home = ({ spotify }) => {
  const userSongs = useSelector((state) => state.user?.currentList);
  const defaultImg =
    "https://s11.favim.com/orig/7/766/7663/76638/anime-pfp-manga-girl-tumblr-Favim.com-7663819.jpg";

  const getSongs = () => {
    if (!userSongs || !userSongs.tracks) return null;
    return userSongs.tracks.items;
  };

  const getPlaylistImg = () => {
    if (!userSongs || !userSongs.images || !userSongs.images[0]) return;
    return userSongs.images[0].url;
  };

  return (
    <div className="player__home">
      <div className="color-banner">
        <HomeHeader spotify={spotify} />
        <div className="home__info">
          <img src={getPlaylistImg() || defaultImg} alt="" />
          <div className="home__info-text">
            <strong>Playlist</strong>
            <h2>{userSongs?.name}</h2>
            <p>{userSongs?.discription}</p>
          </div>
        </div>
      </div>

      <div className="home__songs">
        <div className="home__icons">
          <PlayCircleFilled />
          <Favorite />
          <MoreHoriz />
        </div>

        {getSongs()?.map((song, index) => {
          return (
            <SongRow
              key={`song-${index}`}
              order={index + 1}
              track={song.track}
              spotify={spotify}
            />
          );
        })}

        {getSongs()?.length <= 0 && (
          <h1 className="nothing-text">Nothing To Show</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
