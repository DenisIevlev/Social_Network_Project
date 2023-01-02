import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const NavbarWrapper = styled.div `
position: relative;
width: 250px;
height: 100%;
background-color: #00B388;
font-family: 'BeynoFont';
`;

const NavbarProfileLink = styled(NavLink)`
position: relative;
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
position: relative;
top: 80px;
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
position: relative;
top: 120px;
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
position: relative;
top: 160px;
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
position: relative;
top: 200px;
left: 70px;
font-style: normal;
font-size: 20px;
text-decoration: none;
color: #000000;
&:hover {
  color: white;
}
`;


const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarProfileLink to='/Profile'>Profile</NavbarProfileLink><br/>
      <NavbarMessagesLink to='/Messages'>Messages</NavbarMessagesLink><br/>
      <NavbarNewsLink to='/News'>News</NavbarNewsLink><br/>
      <NavbarMusicLink to='/Music'>Music</NavbarMusicLink><br/>
      <NavbarSettingsLink to='/Settings'>Settings</NavbarSettingsLink>
    </NavbarWrapper>
  );
}

export default Navbar;
