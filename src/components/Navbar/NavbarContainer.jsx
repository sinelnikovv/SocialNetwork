import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.scss";
import { connect } from "react-redux";

const styles = ({ isActive }) => `${s.link} ${isActive ? s.active : ""}`;

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <NavLink className={styles} to={`/profile/` + props.userId}>
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

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
});

let NavbarContainer = connect(mapStateToProps, {})(Navbar);

export default NavbarContainer;