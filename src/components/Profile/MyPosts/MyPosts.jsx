import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import PostForm from "../../forms/PostForm";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });

  const onSubmit = (values) => {
    props.addPost(values.newPost);
  };

  return (
    <div className={s.wrapper}>
      <h3>My posts</h3>

      <PostForm onSubmit={onSubmit} />

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
