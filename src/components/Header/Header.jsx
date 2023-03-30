import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://www.pngitem.com/pimgs/m/485-4852378_sample-logo-png-transparent-png.png"
        alt="Logo"
      />
      <div className="s.login_block">
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
