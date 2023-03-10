import styled from 'styled-components';


const DialogItems = styled.div`
margin: 0px 0px 0px 10px`;

const DialogItem = styled.div``;



const DialogMessage = (props) => {
  return (
    <DialogItems>
      <DialogItem>{props.message}</DialogItem>
    </DialogItems>
  );
}

export default DialogMessage;
