import styled from 'styled-components';
import React from 'react';

const MessageWrapper = styled.div`
margin: 10px 0px 0px 10px`;

const TextMessage = styled.textarea`
`;

const MessageSendler = styled.button`
margin: 5px 0px 0px 10px`;



const Message = (props) => {
  let addNewMessage = () => {
    props.addNewMessage();
  };

  let onMessageChange = (event) => {
    let message = event.target.value;
    props.updateNewMessage(message);
  };

  return (
    <MessageWrapper>
      <TextMessage onChange={onMessageChange} placeholder={'Enter your message'} value={props.newMessageText}></TextMessage>
      <MessageSendler onClick={addNewMessage}>Send Message</MessageSendler>
    </MessageWrapper>
  );
}

export default Message;