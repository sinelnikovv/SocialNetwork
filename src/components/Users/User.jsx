import React from "react";
import styles from "./User.module.scss";
import userPhoto from "../../assets/img/avatar.png";
import { NavLink } from "react-router-dom";

const User = ({
  user,
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  unfollow,
  follow,
  ...props
}) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={`/profile/` + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt=""
              className={styles.userPhoto}
            />
          </NavLink>
        </div>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>"user.location.country"</div>
          <div>"user.location.city"</div>
        </span>
      </span>
    </div>
  );
};

export default User;
