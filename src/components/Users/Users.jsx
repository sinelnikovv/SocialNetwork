import React, { useState } from "react";
// import styles from "./Users.module.scss";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {
  useFollowMutation,
  useGetUsersQuery,
  useUnfollowMutation,
} from "../../api/apiSlice";
import Preloader from "../common/preloader/Preloader";
import PageNotFound from "../404/PageNotFound";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import { Box, Divider, List, TextField } from "@mui/material";

const Users = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [term, setTerm] = useState("");

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const { data, error, isLoading, isFetching } = useGetUsersQuery({
    currentPage,
    pageSize,
    term,
    friends: props.friends
  });

  const [follow, {}] = useFollowMutation();
  const [unfollow, {}] = useUnfollowMutation();

  const handleFollow = async (id) => {
    await follow(id).unwrap();
  };
  const handleUnfollow = async (id) => {
    await unfollow(id).unwrap();
  };

  return (
    <>
      <Box
        sx={{
          m: 2,
          position: "relative",
          alignSelf: "stretch",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",          
        }}
      >
        <TextField
          fullWidth
          label="Search"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          sx={{ mb: 2 }}
        />

        <Divider />

        {error ? (
          <>
            <PageNotFound />
          </>
        ) : isLoading ? (
          <>
            <Preloader />
          </>
        ) : data.totalCount != 0 ? (
          <>
            <Box sx={{ m: 2, position: "relative" }}>
              {isFetching && <Preloader />}
              <List>
                {data.items.map((u) => (
                  <>
                  <User
                    user={u}
                    key={u.id}
                    unfollow={handleUnfollow}
                    follow={handleFollow}
                  />
                  <Divider/>
                  </>
                ))}
              </List>
            </Box>

            <Pagination
              showFirstButton
              showLastButton
              variant="outlined"
              shape="rounded"
              color="primary"
              count={Math.ceil(data.totalCount / pageSize)}
              page={currentPage}
              onChange={handlePageChange}
              sx={{display:{md:"none"}, alignSelf:"center"}}
              siblingCount={0}
              boundaryCount={0}
              
              
            />
            <Pagination
              showFirstButton
              showLastButton
              variant="outlined"
              shape="rounded"
              color="primary"
              count={Math.ceil(data.totalCount / pageSize)}
              page={currentPage}
              onChange={handlePageChange}              
              sx={{display:{xs:"none", md:"block"}, alignSelf:"center"}}
              
            />
          </>
        ) : (
          <div>No users</div>
        )}
      </Box>
    </>
  );
};

export default Users;
