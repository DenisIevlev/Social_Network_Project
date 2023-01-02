import styled from 'styled-components';


const MessagesWrapper = styled.div `
display: flex;
justify-content:  space-between;
width: 300px;
`;

const MessagesItems = styled.div ``;

const Dialog = styled.div ``;

const DialogMessages = styled.div ``;

const DialogMessage = styled.div ``;

const Messages = () => {
  return (
    <MessagesWrapper>
     <MessagesItems>
      <Dialog>Roman</Dialog>
      <Dialog>Arthur</Dialog>
      <Dialog>Svetlana</Dialog>
      <Dialog>Dmitry</Dialog>
      <Dialog>Victoria</Dialog>
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
