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
      if (action.type === 'ADD-POST') {
         let newPost = {
            id: Math.round(Math.random() * 10000),
            message: this._state.profilePage.newPostText,
            likesCount: 0
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._rerenderEntireTree(this.getState());
      } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.newText;
         this._rerenderEntireTree(this.getState());
      }
   }
};

export default store;