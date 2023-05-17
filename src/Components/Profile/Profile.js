import styled from 'styled-components';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Div = styled.div`
    `;


const Profile = (props) => {
  return (
    <Div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </Div>
  );
}

export default Profile;
