import React, { useState } from "react";
import Preloader from "../common/preloader/Preloader";
import s from "./ProfileInfo.module.scss";
import userPhoto from "../../../assets/img/avatar.png";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import { useParams } from "react-router-dom";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  let paramId = useParams();

  const goToEditMode = () => {
    setEditMode(true);
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={s.content}>
        <div className={s.ava}>
          <img src={props.profile.photos.large || userPhoto} alt="" />
          {props.isOwner && (
            <input type={"file"} onChange={onMainPhotoSelected} />
          )}
        </div>
        <div className={s.info}>
          <h3 className={s.name}>{props.profile.fullName}</h3>
          <ProfileStatus
            isOwner={props.isOwner}
            status={props.status}
            updateStatus={props.updateStatus}
          />

          {editMode ? (
            <ProfileDataForm
              initialValues={props.profile}
              profile={props.profile}
              onSubmit={onSubmit}
            />
          ) : (
            <ProfileData
              goToEditMode={goToEditMode}
              profile={props.profile}
              initialValues={props.profile}
              isOwner={props.isOwner}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
