const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
   _state: {
      profilePage: {
         posts: [{ id: 1, message: 'Hi, how are you?', likeCount: 0, }, { id: 2, message: 'It\'s my first post', likeCount: 5, }],
         newPostText: 'Hello there!',
      },
      messagesPage: {
         messagesNameInfo: [{ id: 1, name: 'Roman' }, { id: 2, name: 'Svetlana' },
         { id: 3, name: 'Arthur' }, { id: 4, name: 'Dmitry' },
         { id: 5, name: 'Victoria' }],
         messagesInfo: [{ id: 1, message: 'Hello, how are you?' }, { id: 2, message: 'Do you want to take a walk?' },
         { id: 3, message: 'Where is my key, did you know?' }, { id: 4, message: 'See how it\'s cheap!' },
         { id: 5, message: 'Going for a lunch, you with me?' }],
         newMessage: 'Hi, what are you doing?',
      },
   },
   getState() {
      return this._state;
   },
   _rerenderEntireTree() {

   },
   subscribe(observer) {
      this._rerenderEntireTree = observer;
   },
   dispatch(action) {
      if (action.type === ADD_POST) {
         let newPost = {
            id: Math.round(Math.random() * 10000),
            message: this._state.profilePage.newPostText,
            likesCount: 0
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._rerenderEntireTree(this.getState());
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostText = action.newText;
         this._rerenderEntireTree(this.getState());
      } else if (action.type === ADD_MESSAGE) {
         let newMessage = {
            id: Math.round(Math.random() * 10000),
            message: this._state.messagesPage.newMessage,
         };
         this._state.messagesPage.messagesInfo.push(newMessage);
         this._state.messagesPage.newMessage = '';
         this._rerenderEntireTree(this.getState());
      } else if (action.type === UPDATE_NEW_MESSAGE) {
         this._state.messagesPage.newMessage = action.newMessage;
         this._rerenderEntireTree(this.getState());
      }
   }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (message) =>
   ({ type: UPDATE_NEW_MESSAGE, newMessage: message });

export default store;