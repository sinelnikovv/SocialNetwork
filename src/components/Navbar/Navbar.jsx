import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.scss";
import { useMeQuery } from "../../api/apiSlice";


const styles = ({ isActive }) => `${s.link} ${isActive ? s.active : ""}`;

const Navbar = () => {

  const { me } = useMeQuery(undefined, {
    selectFromResult: ({ data }) => ({
      me: data.data,
    }),
  });


  return (
    <nav className={s.nav}>
      <NavLink className={styles} to={`/profile/${me.id}`}>
        Profile
      </NavLink>

      <NavLink className={styles} to="/messages">
        Messages
      </NavLink>

      <NavLink className={styles} to="/news">
        News
      </NavLink>

      <NavLink className={styles} to="/music">
        Music
      </NavLink>

      <NavLink className={styles} to="/settings">
        Settings
      </NavLink>

      <NavLink className={styles} to="/users">
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
