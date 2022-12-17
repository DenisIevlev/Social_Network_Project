import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import styled from 'styled-components';
import GlobalFonts from './fonts/fontStyles';

const AppWrapper = styled.div`
    display: grid;
    margin: 0 auto;
    max-width: 1200px;
    height: 100vh;
    grid-template-areas: 
    'h h h'
    'n p p'
    'f f f';
    grid-template-rows: 70px 1fr; 
    grid-template-columns: 2fr 10fr;
    grid-gap: 1em; `
  ;

const HeaderStyle = styled.div`
  grid-area: h;
  `;
const NavbarStyle = styled.div`
  grid-area: n;
  `;
const ProfileStyle= styled.div`
  grid-area: p;
  `;
  const FooterStyle = styled.div`
  grid-area: f;
  `;


const App = () => {
  return (
    <AppWrapper>
      <GlobalFonts/>
      <HeaderStyle><Header /></HeaderStyle>
      <NavbarStyle><Navbar /></NavbarStyle>
      <ProfileStyle><Profile /></ProfileStyle>
      <FooterStyle><Footer /></FooterStyle>
    </AppWrapper>
  );
}

export default App;
