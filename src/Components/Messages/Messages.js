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

const Messages = () => {
  return (
    <MessagesWrapper>
      <MessagesItems>
        <MessageItem name='Roman' id='1' />
        <MessageItem name='Svetlana' id='2' />
        <MessageItem name='Arthur' id='3' />
        <MessageItem name='Dmitry' id='4' />
        <MessageItem name='Victoria' id='5' />
      </MessagesItems>
      <DialogMessages>
        <DialogMessage message='Hello, how are you?'/>
        <DialogMessage message='Do you want to take a walk?'/>
        <DialogMessage message='Where is my key, did you know?'/>
        <DialogMessage message="See how it's cheap!"/>
        <DialogMessage message='Going for a lunch, you with me?'/>
      </DialogMessages>
    </MessagesWrapper>
  );
}

export default Messages;
