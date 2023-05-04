import styled from 'styled-components';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Div = styled.div`
    position: relative;
    margin: 5px 0px 0px 20px;
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
