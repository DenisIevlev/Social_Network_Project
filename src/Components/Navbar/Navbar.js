import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Div = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 250px;
height: 450px;
background-color: #00B388;
font-family: 'BeynoFont';
box-sizing: border-box;
`;

const Link = styled(NavLink)`
font-style: normal;
font-size: 20px;
margin: 0px 0px 20px 0px;
text-decoration: none;
color: #000000;
&:hover {
  color: white;
}
`;


const Navbar = () => {
  return (
    <Div>
      <Link to='/Profile'>Profile</Link><br/>
      <Link to='/Messages'>Messages</Link><br/>
      <Link to='/News'>News</Link><br/>
      <Link to='/Music'>Music</Link><br/>
      <Link to='/Settings'>Settings</Link><br/>
      <Link to='/Users'>Users</Link>
    </Div> 
  );
}

export default Navbar;
