import styled from 'styled-components';
import MessageItem from './MessageItem/MessageItem';
import DialogMessage from './DialogMessage/DialogMessage';

const MessagesWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 300px;
`;

const MessagesItems = styled.div``;

const DialogMessages = styled.div``;

const Messages = (props) => {
  let messageNameInfoElements = props.state.messagesNameInfo.map(messageInfo =>
    <MessageItem key={messageInfo.id} name={messageInfo.name} messageId={messageInfo.id} />);

  let messageInfoElements = props.state.messagesInfo.map(messageInfo =>
    <DialogMessage key={messageInfo.id} message={messageInfo.message} messageId={messageInfo.id} />);

  return (
    <MessagesWrapper>
      <MessagesItems>
        {messageNameInfoElements}
      </MessagesItems>
      <DialogMessages>
        {messageInfoElements}
      </DialogMessages>
    </MessagesWrapper>
  );
}

export default Messages;
