import styled from 'styled-components';


const DialogItems = styled.div``;

const DialogItem = styled.div``;


const DialogMessage = (props) => {
  return (
    <DialogItems>
      <DialogItem>{props.message}</DialogItem>
    </DialogItems>
  );
}

export default DialogMessage;
