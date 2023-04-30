import styled from 'styled-components';


const Div = styled.div`
margin: 0px 0px 0px 10px`;

const Span = styled.span``;



const DialogMessage = (props) => {
  return (
    <Div>
      <Span>{props.message}</Span>
    </Div>
  );
}

export default DialogMessage;
