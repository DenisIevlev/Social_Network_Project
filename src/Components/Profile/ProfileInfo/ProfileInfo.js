import user from './../../../img/user.svg';
import styled from 'styled-components';

const ProfileInfoWrapper = styled.div``;

const ProfilePhoto = styled.img`
    width: 20px;
    height: 20px;
`;

const ProfileData = styled.span`
    position: relative;
    font-family: 'Arial';
    left: 5px;
    bottom: 2px;
    `;



const ProfileInfo = () => {
  return (
    <ProfileInfoWrapper>
      <ProfilePhoto src={user} alt='profile-photo'></ProfilePhoto>
      <ProfileData>User Name:</ProfileData><br />
      <ProfileData>Date of Birth:</ProfileData><br />
      <ProfileData>City:</ProfileData><br />
      <ProfileData >Education: </ProfileData><br />
      <ProfileData>Web Site:</ProfileData><br />
    </ProfileInfoWrapper>
  );
}

export default ProfileInfo;
