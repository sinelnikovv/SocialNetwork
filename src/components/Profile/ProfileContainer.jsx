import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

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
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {
  getUserProfile,
})(withRouter(AuthRedirectComponent));
