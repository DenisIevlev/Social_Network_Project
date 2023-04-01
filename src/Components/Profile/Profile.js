import styled from 'styled-components';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const ProfileWrapper = styled.div`
    position: relative;
    margin: 5px 0px 0px 20px;
    `;


const Profile = (props) => {
  return (
    <ProfileWrapper>
    <ProfileInfo/>
    <MyPostsContainer store={props.store} />
    </ProfileWrapper>
  );
}

export default Profile;
