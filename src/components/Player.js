import React, { useEffect } from "react";
import "./styles/player.css";
import SideBar from "./SideBar";
import Home from "./Home";
import Footer from "./Footer";

const Player = ({ spotify }) => {
  useEffect(() => {
    document.title = "Spotify - Home";
  }, []);
  return (
    <div className="player">
      <div className="player__body">
        <SideBar spotify={spotify} />
        <Home spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
};

export default Player;
