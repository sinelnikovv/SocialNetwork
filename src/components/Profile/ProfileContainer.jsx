import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../redux/profileReducer";
import Profile from "./Profile";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
export function withRouter(Child) {
  return (props) => {
    const match = { params: useParams() };
    return <Child {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.auth.userId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
