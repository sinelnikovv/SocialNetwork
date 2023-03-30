import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import authReducer, { setAuthUserData } from "../../redux/authReducer";
import { usersApi } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersApi.auth().then((response) => {
      let data = response.data;
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
