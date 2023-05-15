import logo from '../../img/logo.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const LoginText = styled.span`
position: absolute; 
top: 20px; 
left: 1200px;
`;

const LoginLink = styled(NavLink)`
position: absolute;
top: 20px;
left: 1200px;
font-style: normal;
font-size: 15px;
text-decoration: none;
color: #000000;
font-family: 'BeynoFont';
&:hover {
  color: white;
}`;


const Header = (props) => {
  return (
    <Div>
      <Img src={logo} alt='logo'></Img>
      <Text>Utopia</Text>
      {props.isAuth ? <LoginText>{props.login}</LoginText> : <LoginLink to={'/login/'}>Login</LoginLink>}
    </Div>
  );
}

export default Header;
