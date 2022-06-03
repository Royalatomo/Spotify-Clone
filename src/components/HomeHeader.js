import React from "react";
import "./styles/home-header.css";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

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

  const logoutUser = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
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
        <div className="profile__info">
          <Avatar src={getImage()} alt="" />
          <h4>
            {getName()} <KeyboardArrowDownIcon />
          </h4>
        </div>

        <div className="profile__dropdown">
          <button onClick={logoutUser}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
