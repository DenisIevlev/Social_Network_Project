
let rerenderEntireTree = () => {

};

let state = {
   profilePage: {
      posts: [{ id: 1, message: 'Hi, how are you?', likeCount: 0, }, { id:2, message: 'It\'s my first post', likeCount: 5, }],
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
};

export let addPost = () => {
   let newPost = {
      id: Math.round(Math.random() * 10000),
      message: state.profilePage.newPostText,
      likesCount: 0
   };
   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
}

export let subscribe = (observer) => {
   rerenderEntireTree = observer;
};

export default state;