import user from './../../../img/user.svg';
import styled from 'styled-components';

const Div = styled.div``;

const Img = styled.img`
    width: 20px;
    height: 20px;
    position: relative;
    left: 5px;
`;

const Span = styled.span`
    position: relative;
    font-family: 'Arial';
    left: 5px;
    bottom: 2px;
    `;



const ProfileInfo = () => {
  return (
    <Div>
      <Img src={user} alt='profile-photo'></Img><br></br>
      <Span>User Name:</Span><br />
      <Span>Date of Birth:</Span><br />
      <Span>City:</Span><br />
      <Span >Education: </Span><br />
      <Span>Web Site:</Span><br />
    </Div>
  );
}

export default ProfileInfo;
