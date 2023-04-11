import styled from 'styled-components';
import MessageContainer from './Message/MessageContainer';

const MessagesWrapper = styled.div`;
`;

const Messages = () => {
  return (
    <MessagesWrapper>
        <MessageContainer/>
    </MessagesWrapper>
  );
}

export default Messages;
