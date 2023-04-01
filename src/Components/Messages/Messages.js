import styled from 'styled-components';
import MessageItem from './MessageItem/MessageItem';
import DialogMessage from './DialogMessage/DialogMessage';
import MessageContainer from './Message/MessageContainer';

const MessagesWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 300px;
`;

const MessagesItems = styled.div``;

const DialogMessages = styled.div``;

const Messages = (props) => {
  let state = props.store.getState().messagesPage;
  let messageNameInfoElements = state.messagesNameInfo.map(messageInfo =>
    <MessageItem key={messageInfo.id} name={messageInfo.name} messageId={messageInfo.id} />);

  let messageInfoElements = state.messagesPage.messagesInfo.map(messageInfo =>
    <DialogMessage key={messageInfo.id} message={messageInfo.message} messageId={messageInfo.id} />);

  return (
    <MessagesWrapper>
      <MessagesItems>
        {messageNameInfoElements}
      </MessagesItems>
      <DialogMessages>
        {messageInfoElements}
        <MessageContainer store={props.store}/>
      </DialogMessages>
    </MessagesWrapper>
  );
}

export default Messages;
