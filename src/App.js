import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Messages from './Components/Messages/Messages';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Footer from './Components/Footer/Footer';
import styled from 'styled-components';
import GlobalFonts from './fonts/fontStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppWrapper = styled.div`
    display: grid;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1200px;
    max-height: 100vh;
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
const ProfileStyle = styled.div`
  grid-area: p;
  `;
const FooterStyle = styled.div`
  grid-area: f;
  `;


const App = (props) => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <GlobalFonts />
        <HeaderStyle><Header /></HeaderStyle>
        <NavbarStyle><Navbar /></NavbarStyle>
        <ProfileStyle>
          <Routes>
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path='/messages/*' element={<Messages messagesPage={props.state.messagesPage} dispatch={props.dispatch} />} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </ProfileStyle>
        <FooterStyle><Footer /></FooterStyle>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
