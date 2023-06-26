import React, { useState } from "react";
import styles from "./Profile.module.scss";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";
import Preloader from "../common/preloader/Preloader";
import { useParams } from "react-router-dom";
import {
  useGetProfileQuery,
  useMeQuery,
  useSavePhotoMutation,
  useSaveProfileMutation,
} from "../../api/apiSlice";
import PageNotFound from "../404/PageNotFound";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { Avatar, Box, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddPhotoModal from "./AddPhotoModal/AddPhotoModal";


const Profile = () => {
  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const [isPhotoModalOpen, setPhotoModalOpen] = useState(false);
  const handlePhotoModalOpen = () => setPhotoModalOpen(true);
  const handlePhotoModalClose = () => setPhotoModalOpen(false);
  const handleFormModalClose = () => setFormModalOpen(false);

  const me = useMeQuery(undefined, {
    selectFromResult: ({ data }) => ({
      me: data.data,
    }),
  });

  let paramId = useParams();
  let userId = paramId.userId;
  let isOwner = false;
  if (!userId) {
    userId = me.me.id;
  }
  if (userId === me.me.id) {
    isOwner = true;
  }

  const profile = useGetProfileQuery(userId);

  const [saveProfile] = useSaveProfileMutation();

  const [savePhoto] = useSavePhotoMutation();

  const goToEditMode = () => {
    setFormModalOpen(true);
  };

  const onSubmit = (formData) => {
    let body = {
      fullName: formData.fullName,
      aboutMe: formData.aboutMe,
      lookingForAJob: formData.lookingForAJob,
      lookingForAJobDescription: formData.lookingForAJobDescription,
      contacts: {
        facebook: formData.facebook,
        github: formData.github,
        instagram: formData.instagram,
        mainLink: formData.mainLink,
        twitter: formData.twitter,
        vk: formData.vk,
        website: formData.website,
        youtube: formData.youtube,
      },
    };
    saveProfile(body).unwrap();
    setFormModalOpen(false);
  };

  return profile.isError ? (
    <PageNotFound />
  ) : profile.isLoading ? (
    <Preloader />
  ) : profile.data ? (
    // <Preloader />
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: {xs:"column", md:"row"},
        alignItems: {xs:"center", md:"start"},
        flexGrow:"1"
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Avatar
          alt={profile.data.fullName}
          src={profile.data.photos.large}
          variant="square"
          sx={{ 
            width: {xs:260, sm:320}, 
            height: {xs:260, sm:320} }}
        />
        {isOwner&&<Box className={styles.addPhotoBtnDesktop}>
          <Button
            onClick={handlePhotoModalOpen}
            color="info"
            variant="outlined"
            startIcon={<AddAPhotoOutlinedIcon />}
          >
            Add photo
          </Button>
        </Box>}
        {isOwner&&<Box className={styles.addPhotoBtnMobile}>
          <IconButton color="info" onClick={handlePhotoModalOpen}>
            <AddAPhotoOutlinedIcon />
          </IconButton>
        </Box>}
        
        
      </Box>
      <Box sx={{ alignSelf: "stretch", px: 3, py: 1, flexGrow:1 }}>     

       
        <ProfileData
          goToEditMode={goToEditMode}
          profile={profile.data}
          isOwner={isOwner}
        />
        <ProfileDataForm profile={profile.data} onSubmit={onSubmit} isFormModalOpen={isFormModalOpen} handleCloseFormModal={handleFormModalClose}/>
      </Box>
      <AddPhotoModal
        isPhotoModalOpen={isPhotoModalOpen}
        handleClosePhotoModal={handlePhotoModalClose}
        onPhotoSend={(photo) => savePhoto(photo)}
      />
    </Box>
  ) : null;
};

export default Profile;
