import logo from '../../img/logo.svg';
import styled from 'styled-components';

const Div = styled.div`
background-color: #00B388;
`;

const Img = styled.img`
position: relative;
width: 30px;
height: 30px;
left: 20px;
top: 12px;
`;

const Text = styled.h1`
position: relative;
left: 55px;
bottom: 30px;
font-size: 20px;
font-family: 'BeynoFont';
`;

const Header = () => {
  return (
    <Div>
      <Img src={logo} alt='logo'></Img>
      <Text>Utopia</Text>
    </Div>
  );
}

export default Header;
