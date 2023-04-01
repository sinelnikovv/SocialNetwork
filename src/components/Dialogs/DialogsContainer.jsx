import { connect } from "react-redux";
import {
  updateNewMessageActionCreator,
  addMessageActionCreator,
} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
