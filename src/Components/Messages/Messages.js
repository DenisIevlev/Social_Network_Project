import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const MessagesWrapper = styled.div `
display: flex;
justify-content:  space-between;
width: 300px;
`;

const MessagesItems = styled.div ``;

const MessageItem = styled.div ``;

const MessageLink = styled(NavLink)`
text-decoration: none;
color: #000000;
&:hover {
  color: #00B388;
}
`;

const DialogMessages = styled.div ``;

const DialogMessage = styled.div ``;

const Messages = () => {
  return (
    <MessagesWrapper>
     <MessagesItems>
      <MessageItem><MessageLink to='/Messages/1'>Roman</MessageLink></MessageItem>
      <MessageItem><MessageLink to='/Messages/2'>Arthur</MessageLink></MessageItem>
      <MessageItem><MessageLink to='/Messages/3'> Svetlana</MessageLink></MessageItem>
      <MessageItem><MessageLink to='/Messages/4'>Dmitry</MessageLink></MessageItem>
      <MessageItem><MessageLink to='/Messages/5'>Victoria</MessageLink></MessageItem>
     </MessagesItems>
     <DialogMessages>
     <DialogMessage>Hello, how are you?</DialogMessage>
     <DialogMessage>Do you want to take a walk?</DialogMessage>
     <DialogMessage>Where is my key, did you know?</DialogMessage>
     <DialogMessage>See how it's cheap!</DialogMessage>
     <DialogMessage>Going for a lunch, you with me?</DialogMessage>
     </DialogMessages>
    </MessagesWrapper>
  );
}

export default Messages;
