import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';

let store = {
   _state: {
      profilePage: {
         posts: [{ id: 1, message: 'Hi, how are you?', likeCount: 0, }, { id: 2, message: 'It\'s my first post', likeCount: 5, }],
         newPostText: '',
      },
      messagesPage: {
         messagesNameInfo: [{ id: 1, name: 'Roman' }, { id: 2, name: 'Svetlana' },
         { id: 3, name: 'Arthur' }, { id: 4, name: 'Dmitry' },
         { id: 5, name: 'Victoria' }],
         messagesInfo: [{ id: 1, message: 'Hello, how are you?' }, { id: 2, message: 'Do you want to take a walk?' },
         { id: 3, message: 'Where is my key, did you know?' }, { id: 4, message: 'See how it\'s cheap!' },
         { id: 5, message: 'Going for a lunch, you with me?' }],
         newMessageText: '',
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
      profileReducer(this._state.profilePage, action);
      messagesReducer(this._state.messagesPage, action);
      this._rerenderEntireTree(this._state);
   }
};

export default store;