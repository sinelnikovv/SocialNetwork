import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.wrapper}>
      <h3>My posts</h3>
      <div>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
          cols="50"
          rows="5"
        />
      </div>
      <button onClick={addPost}>Add post</button>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
