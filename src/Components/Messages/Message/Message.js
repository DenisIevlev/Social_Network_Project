import styled from 'styled-components';
import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../redux/messagesReducer';

const MessageWrapper = styled.div`
margin: 10px 0px 0px 10px`;

const TextMessage = styled.textarea`
`;

const MessageSendler = styled.button`
margin: 5px 0px 0px 10px`;



const Message = (props) => {
  let addNewMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (event) => {
    let message = event.target.value;
    props.dispatch(updateNewMessageActionCreator(message));
  };

  return (
    <MessageWrapper>
      <TextMessage onChange={onMessageChange} placeholder={'Enter your message'} value={props.newPostMessage}></TextMessage>
      <MessageSendler onClick={addNewMessage}>Send Message</MessageSendler>
    </MessageWrapper>
  );
}

export default Message;