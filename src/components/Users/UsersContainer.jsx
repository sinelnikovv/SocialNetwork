import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  toggleFollowingProgress,
  requestUsers,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import {
  getPageSize,
  getUsers,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/usersSelectors";

const UsersContainer = (props) => {
  useEffect(() => {
    props.requestUsers(props.currentPage, props.pageSize);
  }, []);

  const onPageChanged = (pageNumber) => {
    props.requestUsers(pageNumber, props.pageSize);
  };

  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        pagesCount={props.pagesCount}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        unfollow={props.unfollow}
        follow={props.follow}
        users={props.users}
        toggleFollowingProgress={props.toggleFollowingProgress}
        followingInProgress={props.followingInProgress}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    toggleFollowingProgress,
    requestUsers,
  })
)(UsersContainer);
