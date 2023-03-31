import React from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

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
  }
  render() {
    if (!this.props.auth.isAuth) return <Navigate to={"/login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getUserProfile,
})(withRouter(ProfileContainer));
