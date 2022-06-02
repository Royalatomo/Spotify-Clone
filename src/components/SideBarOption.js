import React from "react";
import "./styles/sidebar-option.css";
import { useDispatch } from "react-redux";
import { updateCurrentList } from "../app/slice/userSlice";

const SideBarOption = ({ id, title, Icon, spotify = "" }) => {
  const dispatch = useDispatch();
  
  const activate = (e) => {
    const allBtns = document.querySelectorAll(
      ".player__sidebar .sidebar-option"
    );
    for (let i of Array.from(allBtns)) {
      if (i.classList.contains("active")) {
        i.classList.remove("active");
        break;
      }
    }
    e.currentTarget.classList.add("active");

    if (spotify && e.currentTarget?.id) {
      spotify.getPlaylist(e.currentTarget.id).then((songs) => {
        dispatch(updateCurrentList({ currentList: songs }));
      });
    }
  };

  return (
    <div id={id ? id : ""} onClick={activate} className="sidebar-option">
      {Icon && <Icon className="option-icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SideBarOption;
