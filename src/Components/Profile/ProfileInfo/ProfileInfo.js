import styled from 'styled-components';
import Preloader from '../../common/Preloader/Preloader';
import agree from '../../../img/agree.svg';
import cancel from '../../../img/cancel.svg';

const Div = styled.div``;

const Img = styled.img`
    width: 35px;
    height: 35px;
    position: relative;
    left: 5px;
`;

const ImgSvg = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    padding-left: 5px;
`;


const Span = styled.span`
    position: relative;
    font-family: 'Arial';
    left: 5px;
    bottom: 2px;
    `;



const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <Div>
      <Img src={props.profile.photos.small} alt='profile-photo'></Img><br></br>
      <Span>User Name: {props.profile.fullName}</Span><br />
      <Span>Status: {props.profile.aboutMe}</Span><br />
      <Span>Github: {props.profile.contacts.github}</Span><br />
      <Span >Education: </Span><br />
      <Span>Looking for a job: <ImgSvg src={props.profile.lookingForAJob ? agree : cancel}></ImgSvg></Span><br />
    </Div>
  );
}

export default ProfileInfo;
