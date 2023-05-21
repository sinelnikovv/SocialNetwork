import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { useMeQuery } from "../../api/apiSlice";

const Header = (props) => {
  const { me } = useMeQuery(undefined, {
    selectFromResult: ({ data }) => ({
      me: data.data,
    }),
  });
  return (
    <header className={s.header}>
      <img
        src="https://www.pngitem.com/pimgs/m/485-4852378_sample-logo-png-transparent-png.png"
        alt="Logo"
      />
      <div className="s.login_block">
        {me.id ? (
          <div>
            {me.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
