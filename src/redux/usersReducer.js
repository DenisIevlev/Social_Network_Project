import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 3,
   isFetching: true,
   followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userID) {
                  return { ...user, follow: true }
               }
               else return user;
            })
         }
      };
      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userID) {
                  return { ...user, follow: false }
               }
               else return user;
            })
         };
      };
      case SET_USERS: {
         return {
            ...state, users: [...action.users]
         };
      };
      case SET_CURRENT_PAGE: {
         return {
            ...state, currentPage: action.currentPage
         }
      };
      case SET_USERS_TOTAL_COUNT: {
         return {
            ...state, totalUsersCount: action.totalUsersCount
         }
      }
      case SET_IS_FETCHING: {
         return {
            ...state, isFetching: action.isFetching
         }
      }
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
         return {
            ...state, followingInProgress: action.isFetching ?
               [...state.followingInProgress, action.userID] : state.followingInProgress.filter(id => id != action.userID)
         }
      }
      default:
         return state;
   }
};

export const follow = (userID) => ({ type: FOLLOW, userID });

export const unfollow = (userID) => ({ type: UNFOLLOW, userID });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, totalUsersCount });

export const setFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

export const toggleFollowingInProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID });

export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(setFetching(true));
      usersAPI.getUsers(currentPage, pageSize).then(data => {
         dispatch(setFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount));
      })
   }
};

export const isFollow = (userID) => {
   return (dispatch) => {
      dispatch(toggleFollowingInProgress(true, userID));
      usersAPI.follow(userID).then(data => {
        if (data.resultCode == 0) {
           dispatch(follow(userID));
        }
        dispatch(toggleFollowingInProgress(false, userID));
      });
   }
};

export const isUnfollow = (userID) => {
   return (dispatch) => {
      dispatch(toggleFollowingInProgress(true, userID));
      usersAPI.unfollow(userID).then(data => {
         if (data.resultCode == 0) {
            dispatch(unfollow(userID));
         }
      dispatch(toggleFollowingInProgress(false, userID));
      });
   }
};



export default usersReducer;