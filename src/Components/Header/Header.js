import logo from '../../img/logo.svg';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
background-color: #00B388;
`;

const HeaderImage = styled.img`
position: relative;
width: 30px;
height: 30px;
left: 20px;
top: 12px;
`;

const HeaderText = styled.h1`
position: relative;
left: 55px;
bottom: 30px;
font-size: 20px;
font-family: 'BeynoFont';
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImage src={logo} alt='logo'></HeaderImage>
      <HeaderText>Utopia</HeaderText>
    </HeaderWrapper>
  );
}

export default Header;
