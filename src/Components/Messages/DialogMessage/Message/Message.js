import styled from 'styled-components';
import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/state';

const MessageWrapper = styled.div`
margin: 10px 0px 0px 10px`;

const TextMessage = styled.textarea`
`;

const MessageSendler = styled.button`
margin: 5px 0px 0px 65px`;



const Message = (props) => {
  let newMessageElement = React.createRef();

  let addNewMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let message = newMessageElement.current.value;
    props.dispatch(updateNewMessageActionCreator(message));
  };

  return (
    <MessageWrapper>
      <TextMessage ref={newMessageElement} onChange={onMessageChange} value={props.newPostMessage}></TextMessage>
      <MessageSendler onClick={addNewMessage}>Send Message</MessageSendler>
    </MessageWrapper>
  );
}

export default Message;