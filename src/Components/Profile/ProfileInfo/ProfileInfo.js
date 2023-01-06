import user from './../../../img/user.svg';
import styled from 'styled-components';

const ProfileInfoWrapper = styled.div``;

const ProfilePhoto = styled.img`
    width: 20px;
    height: 20px;
`;

const ProfileUsername = styled.span`
    position: relative;
    font-family: 'Arial';
    left: 5px;
    bottom: 2px;
    `;

const ProfileDateOfBirth = styled.span`
    position: relative;
    left: 25px;
    font-family: 'Arial';
    `;

const ProfileCity = styled.span`
    position: relative;
    left: 25px;
    font-family: 'Arial';
`;
const ProfileEducation = styled.span`
    position: relative;
    left: 25px;
    font-family: 'Arial';
`;

const ProfileWebsite = styled.span`
    position: relative;
    left: 25px;
    font-family: 'Arial';
`;



const ProfileInfo = () => {
  return (
    <ProfileInfoWrapper>
      <ProfilePhoto src={user} alt='profile-photo'></ProfilePhoto>
      <ProfileUsername>User Name:</ProfileUsername><br />
      <ProfileDateOfBirth>Date of Birth:</ProfileDateOfBirth><br />
      <ProfileCity>City:</ProfileCity><br />
      <ProfileEducation >Education: </ProfileEducation><br />
      <ProfileWebsite>Web Site:</ProfileWebsite><br />
    </ProfileInfoWrapper>
  );
}

export default ProfileInfo;
