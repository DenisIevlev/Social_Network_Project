
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 3,
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
      default:
         return state;
   }
};

export const followActionCreator = (userID) => ({ type: FOLLOW, userID });

export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setUsersTotalCountActionCreator = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount});


export default usersReducer;