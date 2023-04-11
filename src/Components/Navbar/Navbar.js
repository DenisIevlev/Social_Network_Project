import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const NavbarWrapper = styled.div `
position: relative;
width: 250px;
height: 450px;
background-color: #00B388;
font-family: 'BeynoFont';
box-sizing: border-box;
`;

const NavbarProfileLink = styled(NavLink)`
position: absolute;
top: 40px;
left: 75px;
font-style: normal;
font-size: 20px;
text-decoration: none;
color: #000000;
&:hover {
  color: white;
}
`;

const NavbarMessagesLink = styled(NavLink)`
position: absolute;
top: 95px;
left: 65px;
font-style: normal;
font-size: 20px;
text-decoration: none;
color: #000000;
&:hover {
  color: white;
}
`;

const NavbarNewsLink = styled(NavLink)`
position: absolute;
top: 150px;
left: 85px;
font-style: normal;
font-size: 20px;
text-decoration: none;
color: #000000;
&:hover {
  color: white;
}
`;

const NavbarMusicLink = styled(NavLink)`
position: absolute;
top: 205px;
left: 80px;
font-style: normal;
font-size: 20px;
text-decoration: none;
color: #000000;
&:hover {
  color: white;
}
`;

const NavbarSettingsLink = styled(NavLink) `
position: absolute;
top: 255px;
left: 75px;
font-style: normal;
font-size: 20px;
text-decoration: none;
color: #000000;
&:hover {
  color: white;
}
`;

const NavbarUsersLink = styled(NavLink) `
position: absolute;
top: 305px;
left: 85px;
font-style: normal;
font-size: 20px;
text-decoration: none;
color: #000000;
&:hover {
  color: white;
}
`;


const Navbar = (props) => {
  return (
    <NavbarWrapper>
      <NavbarProfileLink to='/Profile'>Profile</NavbarProfileLink><br/>
      <NavbarMessagesLink to='/Messages'>Messages</NavbarMessagesLink><br/>
      <NavbarNewsLink to='/News'>News</NavbarNewsLink><br/>
      <NavbarMusicLink to='/Music'>Music</NavbarMusicLink><br/>
      <NavbarSettingsLink to='/Settings'>Settings</NavbarSettingsLink>
      <NavbarUsersLink to='/Users'>Users</NavbarUsersLink>
    </NavbarWrapper> 
  );
}

export default Navbar;
