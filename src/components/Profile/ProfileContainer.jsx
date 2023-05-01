import React from "react";
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
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { getProfile, getUserStatus } from "../../redux/profileSelectors";
import { getAuthUserId, getIsAuth } from "../../redux/authSelector";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
export function withRouter(Child) {
  return (props) => {
    const match = { params: useParams() };
    return <Child {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.auth.userId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

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
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
