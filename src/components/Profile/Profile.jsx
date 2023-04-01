import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={s.main}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </main>
  );
};

export default Profile;