import React from "react";
import { connect } from "react-redux";
import {
  updateNewMessageActionCreator,
  addMessageActionCreator,
} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
