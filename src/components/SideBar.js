import React from "react";
import "./styles/sidebar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusic";
import { useSelector } from "react-redux";

const SideBar = ( {spotify} ) => {
  const playlist = useSelector((state) => state.user?.playlist);

  return (
    <div className="player__sidebar">
      <img className="player__logo" src="/img/spotify-logo.svg" alt="" />

      <div className="navigation-btn">
        <SideBarOption Icon={HomeIcon} title="Home" />
        <SideBarOption Icon={SearchIcon} title="Search" />
        <SideBarOption Icon={LibraryIcon} title="Your Library" />
      </div>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <div className="playlist">
        {playlist?.items?.map((item, index) => {
          return (
            <SideBarOption
              id={item.id}
              key={`playlist-${index}`}
              title={item.name}
              playlist={true}
              spotify={spotify}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
