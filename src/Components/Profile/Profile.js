import styled from 'styled-components';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const ProfileWrapper = styled.div`
    position: relative;
    margin: 5px 0px 0px 20px;
    `;


const Profile = () => {
  return (
    <ProfileWrapper>
    <ProfileInfo/>
    <MyPosts/>
    </ProfileWrapper>
  );
}

export default Profile;
