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

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [term, setTerm] = useState("");

  const { data, error, isLoading, isFetching} = useGetUsersQuery({
    currentPage,
    pageSize,
    term
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
    <><div>
      <input placeholder="Search" value={term} onChange={(e)=>{setTerm(e.target.value)}}/>
      
    </div>
      {error ? (
        <><PageNotFound/></>
      ) : isLoading ? (
        <>
          <Preloader />
        </>
      ) : data.totalCount!=0 ? (
        <>
          <div>
            {isFetching && <Preloader />}
            {data.items.map((u) => (
              <User
                user={u}
                key={u.id}
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
      ) : <div>No users</div>}
    </>
  );
};

export default Users;
