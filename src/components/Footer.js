import React from "react";
import "./styles/footer.css";
import { PlayCircleOutline } from "@material-ui/icons";
import { SkipPrevious } from "@material-ui/icons";
import { SkipNext } from "@material-ui/icons";
import { Shuffle } from "@material-ui/icons";
import { Repeat } from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
import { PlaylistPlay } from "@material-ui/icons";
import { VolumeDown } from "@material-ui/icons";
import { useSelector } from "react-redux";

const Footer = () => {
  const userSong = useSelector((state) => state.user?.currentPlaying);

  const getName = () => {
    if (!userSong || !userSong.name) return;
    const name = userSong.name;
    const slicedName = name.slice(0, 30);
    if (name.length === slicedName.length) return slicedName;
    return slicedName + "...";
  }

  const getArtists = () => {
    if (!userSong || !userSong.artists) return;
    const name = userSong.artists.join(", ");
    const slicedName = name.slice(0, 30);
    if (name.length === slicedName.length) return slicedName;
    return slicedName + "...";
  }

  return (
    <div className="player__footer">
      <div className="footer__left">
        <img className="footer__album-logo" src={userSong.img} alt="" />
        <div className="footer__song-info">
          <h4>{getName()}</h4>
          <p>{getArtists()}</p>
        </div>
      </div>

      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline className="footer__icon footer__icon--center" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>

          <Grid item>
            <VolumeDown />
          </Grid>

          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
