
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
   users: []
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
      default:
         return state;
   }
};

export const followActionCreator = (userID) => ({ type: FOLLOW, userID });

export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;