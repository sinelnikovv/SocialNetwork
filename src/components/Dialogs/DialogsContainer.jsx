import { connect } from "react-redux";
import { addMessageActionCreator } from "../../redux/dialogReducer";
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
    sendMessage: (newMessage) => {
      dispatch(addMessageActionCreator(newMessage));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
