import styled from 'styled-components';
import Preloader from '../../common/Preloader/Preloader';
import agree from '../../../img/agree.svg';
import cancel from '../../../img/cancel.svg';
import user from '../../../img/user.svg';

const Div = styled.div``;

const Img = styled.img`
    width: 35px;
    height: 35px;
`;

const ImgSvg = styled.img`
    width: 20px;
    height: 20px;
    margin: 0px 0px -3px 0px;
`;


const Span = styled.span`
    font-family: 'Arial';
    `;



const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <Div>
      <Img src={props.profile.photos.small ? props.profile.photos.small : user} alt='profile-photo'></Img><br></br>
      <Span>User Name: {props.profile.fullName}</Span><br />
      <Span>Status: {props.profile.aboutMe}</Span><br />
      <Span>Github: {props.profile.contacts.github}</Span><br />
      <Span >Education: </Span><br />
      <Span>Looking for a job: <ImgSvg src={props.profile.lookingForAJob ? agree : cancel}></ImgSvg></Span><br />
    </Div>
  );
}

export default ProfileInfo;
