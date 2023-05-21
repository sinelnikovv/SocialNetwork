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
  useGetStatusQuery,
  useMeQuery,
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
  if (userId == me.me.id) {
    isOwner = true;
  }

  const profile = useGetProfileQuery(userId);

  // const { data, error, isLoading, isFetching } = useGetStatusQuery(userId);
  // debugger;

  const goToEditMode = () => {
    setEditMode(true);
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
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
            {profile.data.isFetching && <Preloader />}
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
                  <ProfileStatus
                    isOwner={isOwner}
                    status={props.status}
                    updateStatus={props.updateStatus}
                  />

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
