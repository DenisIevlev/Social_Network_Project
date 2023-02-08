import styled from 'styled-components';

const FooterWrapper = styled.div`
background-color: #00B388;
height: 70px;
width: 1200px;
`;

const FooterText = styled.div`
position: absolute;
padding: 10px;
font-family: 'Arial';
width: 1200px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>2022 © Utopia. Все права защищены. Копирование текстов или изображений,
        распространение информации в любой форме, 
        запрещается без письменного согласия Utopia.</FooterText>
    </FooterWrapper>
  );
}

export default Footer;
