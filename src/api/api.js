import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'd9d490b9-ca67-47c2-b4fe-cba79fbd88db'
  }
});


export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },
  getAuth() {
    return instance.get(`auth/me`).then(response => response.data);
  },
  follow(usersId) {
    return instance.post(`follow/${usersId}`).then(response => response.data);
  },
  unfollow(usersId) {
    return instance.delete(`follow/${usersId}`).then(response => response.data);
  }
};