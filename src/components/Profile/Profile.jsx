import React, { useState } from "react";
import s from "./Profile.module.scss";
import userPhoto from "../../assets/img/avatar.png";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import Preloader from "../common/preloader/Preloader";
import { useParams } from "react-router-dom";
import {
  useGetProfileQuery,
  useMeQuery,
  useSavePhotoMutation,
  useSaveProfileMutation,
} from "../../api/apiSlice";

const Profile = (props) => {
  const [editMode, setEditMode] = useState(false);

  const me = useMeQuery(undefined, {
    selectFromResult: ({ data }) => ({
      me: data.data,
    }),
  });

  let paramId = useParams();
  let userId = paramId.userId;
  let isOwner = false;
  if(!userId){
    userId = me.me.id
  }
  if (userId == me.me.id) {
    isOwner = true;
  }

  const profile = useGetProfileQuery(userId);

  const [saveProfile, { isLoading }] = useSaveProfileMutation();

  const [savePhoto] = useSavePhotoMutation();


  const goToEditMode = () => {
    setEditMode(true);
  };

  const onSubmit = (formData) => {       
    let body = {
      fullName: formData.fullName,
      aboutMe: formData.aboutMe,
      lookingForAJob: formData.lookingForAJob,
      lookingForAJobDescription: formData.lookingForAJobDescription,
      contacts:{
        facebook: formData.facebook,
        github: formData.github,
        instagram: formData.instagram,
        mainLink: formData.mainLink,
        twitter: formData.twitter,
        vk: formData.vk,
        website: formData.website,
        youtube: formData.youtube,
      }      
    }
    saveProfile(body).unwrap();  
    console.log(body);  
    setEditMode(false);
  };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
      }
  };
  
  return (
    <main className={s.main}>
      <>
        {profile.isError ? (
          <>Oh no, there was an error</>
        ) : profile.isLoading ? (
          <>
            <Preloader />
          </>
        ) : profile.data ? (
          <>
            {(isLoading) && <Preloader />}
            {profile.isFetching && <Preloader />}
            <div>
              <div className={s.content}>
                <div className={s.ava}>
                  <img src={profile.data.photos.large || userPhoto} alt="" />
                  {isOwner && (
                    <input type={"file"} onChange={onMainPhotoSelected} />
                  )}
                </div>
                <div className={s.info}>
                  <h3 className={s.name}>{profile.data.fullName}</h3>

                  <ProfileStatus isOwner={isOwner} userId={userId} />

                  {editMode ? (
                    <ProfileDataForm
                      initialValues={profile.data}
                      profile={profile.data}
                      onSubmit={onSubmit}
                    />
                  ) : (
                    <ProfileData
                      goToEditMode={goToEditMode}
                      profile={profile.data}
                      initialValues={profile.data}
                      isOwner={isOwner}
                    />
                  )}
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    </main>
  );
};

export default Profile;
