
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 3,
   isFetching: true,
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
      default:
         return state;
   }
};

export const follow= (userID) => ({ type: FOLLOW, userID });

export const unfollow = (userID) => ({ type: UNFOLLOW, userID });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount});

export const setFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});


export default usersReducer;