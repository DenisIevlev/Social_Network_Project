import logo from '../../img/logo.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Div = styled.div`
height: 70px;
background-color: #00B388;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Img = styled.img`
width: 30px;
height: 30px;
margin-left: 20px;
`;

const Text = styled.h1`
font-size: 20px;
font-family: 'BeynoFont';
margin-right: 980px;
`;

const LoginText = styled.span`
margin-right: 20px;
`;

const LoginLink = styled(NavLink)`
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
