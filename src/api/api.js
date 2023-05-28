import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "f2bcdd0d-7a7a-4176-9f14-ede063f9113e",
  },
});
//done
// export const usersApi = {
//   //done
//   getUsers(currentPage, pageSize) {
//     return instance
//       .get(`users?page=${currentPage}&count=${pageSize}`)
//       .then((response) => {
//         return response.data;
//       });
//   },
//   //done
//   follow(userId) {
//     return instance.post(`follow/${userId}`).then((response) => {
//       return response.data;
//     });
//   },
//   //done
//   unfollow(userId) {
//     return instance.delete(`follow/${userId}`).then((response) => {
//       return response.data;
//     });
//   },
//   //dont need
//   getProfile(userId) {
//     return profileApi.getProfile(userId);
//   },
// };

export const profileApi = {
  // getProfile(userId) {
  //   return instance.get(`profile/` + userId);
  // },

  // getStatus(userId) {
  //   return instance.get(`profile/status/` + userId);
  // },

  // updateStatus(status) {
  //   return instance.put(`profile/status`, { status: status });
  // },

  savePhoto(photoFile) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  // saveProfile(profile) {
  //   return instance.put(`profile`, profile);
  // },
};

export const authApi = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe, captcha) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityApi = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
