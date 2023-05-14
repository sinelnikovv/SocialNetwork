import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
  updateStatus,
} from "../../redux/profileReducer";
import Profile from "./Profile";
import { compose } from "redux";
import { getProfile, getUserStatus } from "../../redux/profileSelectors";
import { getAuthUserId, getIsAuth } from "../../redux/authSelector";

const ProfileContainer = (props) => {
  let paramId = useParams();

  const refreshProfile = () => {
    let userId = paramId.userId;
    if (!userId) {
      userId = props.userId;
    }
    props.getUserProfile(userId);
    props.getStatus(userId);
  };

  useEffect(() => {
    refreshProfile();
  }, [paramId]);

  return (
    <Profile
      {...props}
      isOwner={paramId.userId == props.authUserId}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      savePhoto={props.savePhoto}
    />
  );
};

let mapStateToProps = (state) => ({
  profile: getProfile(state),
  status: getUserStatus(state),
  authUserId: getAuthUserId(state),
  isAuth: getIsAuth(state),
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  })
)(ProfileContainer);
