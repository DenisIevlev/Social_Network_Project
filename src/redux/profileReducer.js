const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   posts: [{ id: 1, message: 'Hi, how are you?', likeCount: 0, }, { id: 2, message: 'It\'s my first post', likeCount: 5, }],
   newPostText: '',
};

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: Math.round(Math.random() * 10000),
            message: state.newPostText,
            likesCount: 0
         };
         let stateCopy = {...state};
         stateCopy.posts = [...state.posts];
         stateCopy.posts.push(newPost);
         stateCopy.newPostText = '';
         return stateCopy;
      }
      case UPDATE_NEW_POST_TEXT: {
         let stateCopy = {...state};
         stateCopy.newPostText = action.newText;
         return stateCopy;
      }
      default:
         return state;
   }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;