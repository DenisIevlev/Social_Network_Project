import React from 'react';
import Message from './Message';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../redux/messagesReducer';


const MessageContainer = (props) => {
  let state = props.store.getState();

  let addNewMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (message) => {
    props.store.dispatch(updateNewMessageActionCreator(message));
  };

  return (
    <Message addNewMessage={addNewMessage} updateNewMessage={onMessageChange} newMessageText={state.messagesPage.newMessageText}/>
  );
}

export default MessageContainer;