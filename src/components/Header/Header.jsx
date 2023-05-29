import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { useLogoutMutation, useMeQuery } from "../../api/apiSlice";

const Header = () => {

  const { me } = useMeQuery(undefined, {
    selectFromResult: ({ data }) => ({
      me: data.data,
    }),
  });

  const [logout] = useLogoutMutation();

  

  return (
    <header className={s.header}>
      <img
        src="https://www.pngitem.com/pimgs/m/485-4852378_sample-logo-png-transparent-png.png"
        alt="Logo"
      />
      <div className="s.login_block">
        {me.id ? (
          <div>
            {me.login} - <button onClick={logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
