import React, { useState } from "react";
import {
  useGetStatusQuery,
  useUpdateStatusMutation,
} from "../../../api/apiSlice";
import { Box, Button, TextField, Typography } from "@mui/material";

const ProfileStatus = (props) => {
  const { data } = useGetStatusQuery(props.userId);

  const [updateStatus] = useUpdateStatusMutation();

  const [editMode, setEditMode] = useState(false);
  const [newStatus, setNewStatus] = useState();

  const activateEditMode = () => {
    if (props.isOwner) {
      setEditMode(true);
      setNewStatus(data);
    }
  };

  const deactivateEditMode = async () => {
    await updateStatus({ status: newStatus }).unwrap();
    setEditMode(false);
  };

  const onStatusChange = (e) => {
    setNewStatus(e.currentTarget.value);
  };

  return (
    <Box sx={{my:1}}>
      {!editMode && (
        <Box>
          <Typography sx={{ my: 1, p: 0 }}>{data || "No status"}</Typography>
          <Button size="small" variant="outlined" onClick={activateEditMode}>
            Edit status
          </Button>
        </Box>
      )}
      {editMode && (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            sx={{ mb: 1, p: 0 }}
            value={newStatus}
            onChange={onStatusChange}
            id="standard-basic"           
            variant="filled"
            label="Status"
          />
          <Button
            sx={{ alignSelf: "flex-start" }}
            size="small"
            variant="outlined"
            onClick={deactivateEditMode}
          >
            Save status
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ProfileStatus;
