import styled from 'styled-components';

const NavbarWrapper = styled.div `
position: relative;
width: 250px;
height: 100%;
background-color: #00B388;
font-family: 'BeynoFont';
`;

const NavbarProfileLink = styled.a `
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

const NavbarMessagesLink = styled.a `
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

const NavbarNewsLink = styled.a `
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

const NavbarMusicLink = styled.a `
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

const NavbarSettingsLink = styled.a `
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
      <NavbarProfileLink href='/Profile'>Profile</NavbarProfileLink><br/>
      <NavbarMessagesLink href='/Messages'>Messages</NavbarMessagesLink><br/>
      <NavbarNewsLink href='/News'>News</NavbarNewsLink><br/>
      <NavbarMusicLink href='/Music'>Music</NavbarMusicLink><br/>
      <NavbarSettingsLink href='/Settings'>Settings</NavbarSettingsLink>
    </NavbarWrapper>
  );
}

export default Navbar;
