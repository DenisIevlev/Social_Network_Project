import styled from 'styled-components';

const Div = styled.div`
background-color: #00B388;
height: 70px;
width: 1200px;
`;

const Span = styled.span`
position: absolute;
padding: 10px;
font-family: 'Arial';
width: 1200px;
`;

const Footer = () => {
  return (
    <Div>
      <Span>2022 © Utopia. Все права защищены. Копирование текстов или изображений,
        распространение информации в любой форме, 
        запрещается без письменного согласия Utopia.</Span>
    </Div>
  );
}

export default Footer;
