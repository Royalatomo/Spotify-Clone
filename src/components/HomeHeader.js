import React from "react";
import "./styles/home-header.css";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

const HomeHeader = ({ spotify }) => {
  const user = useSelector((state) => state.user?.info);

  const getImage = () => {
    if (!user || !user.images) return;
    if (!user.images[0]) return;
    return user.images[0].url;
  };

  const getName = () => {
    if (!user || !user.display_name) return;
    const name = user.display_name;
    const slicedName = name.slice(0, 14);
    if (name.length === slicedName.length) return slicedName;
    return slicedName + "...";
  };

  return (
    <div className="home__header">
      <div className="header__left">
        <Search />
        <input
          type="text"
          placeholder="Search for Artists, Songs or Albums..."
        />
      </div>

      <div className="header__right">
        <Avatar src={getImage()} alt="" />
        <h4>{getName()}</h4>
      </div>
    </div>
  );
};

export default HomeHeader;
