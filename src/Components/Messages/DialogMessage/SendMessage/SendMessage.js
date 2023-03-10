import styled from 'styled-components';


const MessageWrapper = styled.div``;

const TextMessage = styled.textarea``;

const MessageSendler = styled.button``;



const Message = (props) => {
  return (
    <MessageWrapper>
    <TextMessage></TextMessage>
    <MessageSendler></MessageSendler>
    </MessageWrapper>
  );
}

export default Message;
