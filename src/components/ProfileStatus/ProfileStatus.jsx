import React, { useState } from "react";
import { useGetStatusQuery, useUpdateStatusMutation } from "../../api/apiSlice";

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
    <div>
      {!editMode && (
        <div>
          <span onClick={activateEditMode}>{data || "No status"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={newStatus}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
