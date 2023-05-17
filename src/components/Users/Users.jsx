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

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { data, error, isLoading, isFetching } = useGetUsersQuery({
    currentPage,
    pageSize,
  });

  //folow unfollow
  const [followId, setfollowId] = useState();
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
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>
          <Preloader />
        </>
      ) : data ? (
        <>
          <div>
            {isFetching && <Preloader />}
            {data.items.map((u) => (
              <User
                user={u}
                key={u.id}
                // followingInProgress={followingInProgress}
                unfollow={handleUnfollow}
                follow={handleFollow}
              />
            ))}
          </div>
          <div>
            <Paginator
              currentPage={currentPage}
              onPageChanged={setCurrentPage}
              pageSize={pageSize}
              totalCount={data.totalCount}
              portionSize={2}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Users;
