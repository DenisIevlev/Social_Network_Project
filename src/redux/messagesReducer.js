const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
   messagesNameInfo: [{ id: 1, name: 'Roman' }, { id: 2, name: 'Svetlana' },
   { id: 3, name: 'Arthur' }, { id: 4, name: 'Dmitry' },
   { id: 5, name: 'Victoria' }],
   messagesInfo: [{ id: 1, message: 'Hello, how are you?' }, { id: 2, message: 'Do you want to take a walk?' },
   { id: 3, message: 'Where is my key, did you know?' }, { id: 4, message: 'See how it\'s cheap!' },
   { id: 5, message: 'Going for a lunch, you with me?' }],
   newMessageText: '',
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = {
            id: Math.round(Math.random() * 10000),
            message: state.newMessageText,
         };
         state.messagesInfo.push(newMessage);
         state.newMessageText = '';
         return state;
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newMessage;
         return state;
      default:
         return state;
   }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (message) =>
   ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message });
   
export default profileReducer;