import styled from 'styled-components';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const ProfileWrapper = styled.div`
    position: relative;
    margin: 5px 0px 0px 20px;
    `;


const Profile = (props) => {
  return (
    <ProfileWrapper>
    <ProfileInfo/>.
    <MyPosts posts={props.profilePage.posts} addPost={props.addPost} 
    updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText} />
    </ProfileWrapper>
  );
}

export default Profile;
