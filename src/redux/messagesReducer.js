const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const profileReducer = (state, action) => {
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