import { usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
   posts: [{ id: 1, message: 'Hi, how are you?', likeCount: 0, }, { id: 2, message: 'It\'s my first post', likeCount: 5, }],
   newPostText: '',
   profile: null
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: Math.round(Math.random() * 10000),
            message: state.newPostText,
            likesCount: 0
         };
         return {
            ...state,
            newPostText: '',
            posts: [...state.posts, newPost]
         };
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         };
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
         }
      }
      default:
         return state;
   }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const setUsersProfile = (profile) =>
   ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = (userID) => {
   return (dispatch) => {
      usersAPI.getProfile(userID).then(response => {
         dispatch(setUsersProfile(response.data));
      });
   }
}
export default profileReducer;