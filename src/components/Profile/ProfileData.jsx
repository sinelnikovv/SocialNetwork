import { Box, Typography, IconButton, Button, Divider } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileData = (props) => {
  return (
    <>
      <Box sx={{ mt: 1 }}>

        <Typography variant="h5" component="h4">
          {props.profile.fullName}
        </Typography>
        <Divider />

        <ProfileStatus isOwner={props.isOwner} userId={props.profile.userId} />
        <Divider />
        <Box sx={{my:2}}>
        <Typography>About me: {props.profile.aboutMe}</Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography>Looking for a job:</Typography>
          {props.profile.lookingForAJob ? (
            <CheckCircleOutlinedIcon />
          ) : (
            <CancelOutlinedIcon />
          )}
        </Box>
        <Box>
          <Typography>
            Skills: {props.profile.lookingForAJobDescription}
          </Typography>
        </Box>

        {Object.values(props.profile.contacts).some(
          (elem) => elem !== null
        ) && (
          <Box>
            <Typography>My contacts:</Typography>

            <Box>
              {props.profile.contacts.facebook && (
                <Tooltip
                  title={props.profile.contacts.facebook}
                  arrow
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    href={props.profile.contacts.facebook}
                    color="primary"
                  >
                    <FacebookOutlinedIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              )}

              {props.profile.contacts.github && (
                <Tooltip
                  title={props.profile.contacts.github}
                  arrow
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    href={props.profile.contacts.github}
                    color="primary"
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              )}

              {props.profile.contacts.instagram && (
                <Tooltip
                  title={props.profile.contacts.instagram}
                  arrow
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    href={props.profile.contacts.instagram}
                    color="primary"
                  >
                    <InstagramIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              )}

              {props.profile.contacts.twitter && (
                <Tooltip
                  title={props.profile.contacts.twitter}
                  arrow
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    href={props.profile.contacts.twitter}
                    color="primary"
                  >
                    <TwitterIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              )}

              {props.profile.contacts.mainLink && (
                <Tooltip
                  title={props.profile.contacts.mainLink}
                  arrow
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    href={props.profile.contacts.mainLink}
                    color="primary"
                  >
                    <LanguageIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              )}

              {props.profile.contacts.website && (
                <Tooltip
                  title={props.profile.contacts.website}
                  arrow
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    href={props.profile.contacts.website}
                    color="primary"
                  >
                    <LanguageIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              )}

              {props.profile.contacts.youtube && (
                <Tooltip
                  title={props.profile.contacts.youtube}
                  arrow
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    href={props.profile.contacts.youtube}
                    color="primary"
                  >
                    <YouTubeIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Box>
        )}
        {props.isOwner && (
          <Button variant="outlined" onClick={props.goToEditMode}>
            Edit profile
          </Button>
        )}
        </Box>
      </Box>
    </>
  );
};

export default ProfileData;
