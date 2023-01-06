import Post from './Post/Post';
import styled from 'styled-components';


const MyPostsWrapper = styled.div``;

const MyPosts = () => {
  return (
       <MyPostsWrapper>
      <h3 >My posts:</h3>
      <textarea className='profile__info__textarea' rows="2" cols="20" value="your news..."></textarea><br />
      <input type='button' value='Send'></input>
      <Post message ='Hi, how are you?' likeCount='0'/>
      <Post message ="It's my first post" likeCount='5'/>
    </MyPostsWrapper>
  );
}

export default MyPosts;
