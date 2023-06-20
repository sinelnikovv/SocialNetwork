import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import err from "../forms/FormsControl/FormsControls.module.scss";
import { Box, Button, TextField } from "@mui/material";
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Dialog from '@mui/material/Dialog';
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ProfileDataForm = (props) => {
  const changeProfileSchema = yup.object().shape({
    fullName: yup
      .string("Name should be a string")
      .min(2, "Name must have at least 2 letters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: props.profile.fullName,
      aboutMe: props.profile.aboutMe,
      lookingForAJob: props.profile.lookingForAJob,
      lookingForAJobDescription: props.profile.lookingForAJobDescription,
      facebook: props.profile.contacts.facebook,
      github: props.profile.contacts.github,
      instagram: props.profile.contacts.instagram,
      mainLink: props.profile.contacts.mainLink,
      twitter: props.profile.contacts.twitter,
      vk: props.profile.contacts.vk,
      website: props.profile.contacts.website,
      youtube: props.profile.contacts.youtube,
    },
    resolver: yupResolver(changeProfileSchema),
  });

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (props.isFormModalOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props.isFormModalOpen]);

  return (
    <Dialog open={props.isFormModalOpen} onClose={props.handleCloseFormModal} scroll="paper">
       <DialogTitle id="scroll-dialog-title">Change profile</DialogTitle>
       <DialogContent dividers>
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <TextField
                sx={{ mb: 1, p: 0 }}
                id="fullName"
                variant="outlined"
                label="Your name"
                name="fullName"
                {...register("fullName")}
                required
                error={errors.fullName}
              />
              {errors.fullName ? (
                <Typography variant="body2" component="p">
                  {errors.fullName.message}
                </Typography>
              ) : (
                <></>
              )}
            </Box>
            <Box>
              <TextField
                sx={{ mb: 1, p: 0 }}
                id="aboutMe"
                variant="outlined"
                label="About me"
                name="aboutMe"
                {...register("aboutMe")}
              />
            </Box>
            <FormControlLabel
              sx={{ m: 0 }}
              labelPlacement="start"
              control={
                <Checkbox
                  {...register("lookingForAJob")}
                  name="lookingForAJob"
                  id="lookingForAJob"
                />
              }
              label="Looking For a job:"
            />

            <TextField
              sx={{ mb: 1, p: 0 }}
              id="lookingForAJobDescription"
              variant="outlined"
              label="My skills"
              name="lookingForAJobDescription"
              {...register("lookingForAJobDescription")}
            />
            <Typography sx={{ my: 2 }}>My contacts:</Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FacebookOutlinedIcon
                fontSize="large"
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                sx={{ mb: 1, p: 0 }}
                id="facebook"
                variant="outlined"
                label="Facebook"
                name="facebook"
                {...register("facebook")}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <GitHubIcon
                fontSize="large"
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                sx={{ mb: 1, p: 0 }}
                id="github"
                variant="outlined"
                label="Github"
                name="github"
                {...register("github")}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <InstagramIcon
                fontSize="large"
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                sx={{ mb: 1, p: 0 }}
                id="instagram"
                variant="outlined"
                label="Instagram"
                name="instagram"
                {...register("instagram")}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TwitterIcon
                fontSize="large"
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                sx={{ mb: 1, p: 0 }}
                id="twitter"
                variant="outlined"
                label="Twitter"
                name="twitter"
                {...register("twitter")}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LanguageIcon
                fontSize="large"
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                sx={{ mb: 1, p: 0 }}
                id="mainLink"
                variant="outlined"
                label="Main link"
                name="mainLink"
                {...register("mainLink")}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LanguageIcon
                fontSize="large"
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                sx={{ mb: 1, p: 0 }}
                id="website"
                variant="outlined"
                label="Website"
                name="website"
                {...register("website")}
              />
            </Box>     

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <YouTubeIcon
                fontSize="large"
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                sx={{ mb: 1, p: 0 }}
                id="youtube"
                variant="outlined"
                label="Youtube"
                name="youtube"
                {...register("youtube")}
              />
            </Box>
            <Button type="submit" variant="outlined">Save</Button>            
          </Box>
        </form>
        </DialogContent>
    </Dialog>
  );
};

export default ProfileDataForm;
