import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPost) => {
      dispatch(addPostActionCreator(newPost));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
