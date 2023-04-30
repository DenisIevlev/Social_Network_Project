import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Div = styled.div `
position: relative;
width: 250px;
height: 450px;
background-color: #00B388;
font-family: 'BeynoFont';
box-sizing: border-box;
`;

const ProfileLink = styled(NavLink)`
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

const MessagesLink = styled(NavLink)`
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

const NewsLink = styled(NavLink)`
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

const MusicLink = styled(NavLink)`
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

const SettingsLink = styled(NavLink) `
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

const UsersLink = styled(NavLink) `
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


const Navbar = () => {
  return (
    <Div>
      <ProfileLink to='/Profile'>Profile</ProfileLink><br/>
      <MessagesLink to='/Messages'>Messages</MessagesLink><br/>
      <NewsLink to='/News'>News</NewsLink><br/>
      <MusicLink to='/Music'>Music</MusicLink><br/>
      <SettingsLink to='/Settings'>Settings</SettingsLink>
      <UsersLink to='/Users'>Users</UsersLink>
    </Div> 
  );
}

export default Navbar;
