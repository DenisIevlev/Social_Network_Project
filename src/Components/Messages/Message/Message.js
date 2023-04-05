import styled from 'styled-components';
import React from 'react';
import MessageItem from '../MessageItem/MessageItem';
import DialogMessage from '../DialogMessage/DialogMessage'

const MessageWrapper = styled.div`
`;

const TextMessage = styled.textarea`
`;

const MessageSendler = styled.button`
margin: 5px 0px 0px 0px`;

const ItemsWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 300px;`;

const TextareaWrapper = styled.div`
margin: 20px 0px 0px 72px;`;

const MessagesItems = styled.div``;

const DialogMessages = styled.div``;



const Message = (props) => {

  let messageNameInfoElements = props.messagesPage.messagesNameInfo.map(messageInfo =>
    <MessageItem key={messageInfo.id} name={messageInfo.name} messageId={messageInfo.id} />);

  let messageInfoElements = props.messagesPage.messagesInfo.map(messageInfo =>
    <DialogMessage key={messageInfo.id} message={messageInfo.message} messageId={messageInfo.id} />);

  let addNewMessage = () => {
    props.addNewMessage();
  };

  let onMessageChange = (event) => {
    let message = event.target.value;
    props.updateNewMessage(message);
  };

  return (
    <MessageWrapper>
      <ItemsWrapper>
        <MessagesItems>
          {messageNameInfoElements}
        </MessagesItems>
        <DialogMessages>
          {messageInfoElements}
        </DialogMessages>
      </ItemsWrapper>
      <TextareaWrapper>
        <TextMessage onChange={onMessageChange} placeholder={'Enter your message'} value={props.newMessageText}></TextMessage><br/>
        <MessageSendler onClick={addNewMessage}>Send Message</MessageSendler>
      </TextareaWrapper>
    </MessageWrapper>
  );
}

export default Message;