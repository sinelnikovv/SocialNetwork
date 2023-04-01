import { connect } from "react-redux";
import {
  updateNewMessageActionCreator,
  addMessageActionCreator,
} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (message) => {
      dispatch(updateNewMessageActionCreator(message));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
