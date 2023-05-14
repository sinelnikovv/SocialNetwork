import React from "react";
// import styles from "./Users.module.scss";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  unfollow,
  follow,
}) => {
  return (
    <div>
      {users.map((u) => (
        <User
          user={u}
          key={u.id}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        totalItemsCount={totalUsersCount}
        portionSize={2}
      />
    </div>
  );
};

export default Users;
