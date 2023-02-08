import rerenderEntireTree from '../render';

let state = {
   profilePage: {
      posts: [{ id:1, message: 'Hi, how are you?', likeCount: 0, }, { id:2, message: 'It\'s my first post', likeCount: 5, }],
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

export let addPost = (postMessage) => {
   let newPost = {
      id: 3,
      message: postMessage,
      likesCount: 0
   };

   state.profilePage.posts.push(newPost);
   rerenderEntireTree(state);
}

export default state;