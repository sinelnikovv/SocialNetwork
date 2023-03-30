import React from "react";
import s from "./Post.module.scss";

const Post = (props) => {
  return (
    <div>
      <img
        className={s.avatar}
        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
        alt=""
      />
      {props.message}
      <button>Likes</button>
      {props.likesCount}
    </div>
  );
};

export default Post;
