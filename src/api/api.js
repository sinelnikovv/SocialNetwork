import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "f2bcdd0d-7a7a-4176-9f14-ede063f9113e",
  },
});

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  auth() {
    return instance.get(`auth/me`);
  },
};
