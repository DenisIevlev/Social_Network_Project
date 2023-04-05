import styled from 'styled-components';
import MessageContainer from './Message/MessageContainer';

const MessagesWrapper = styled.div`;
`;

const Messages = (props) => {
  return (
    <MessagesWrapper>
        <MessageContainer store={props.store}/>
    </MessagesWrapper>
  );
}

export default Messages;
