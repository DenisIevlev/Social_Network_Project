import Post from './Post/Post';
import styled from 'styled-components';


const MyPostsWrapper = styled.div``;

const MyPosts = (props) => {
  const posts = props.posts.map(post => <Post postMessage={post.message} likeCount={post.likeCount}/>);
  return (
       <MyPostsWrapper>
      <h3 >My posts:</h3>
      <textarea className='profile__info__textarea' rows="2" cols="20" value="your news..."></textarea><br />
      <input type='button' value='Send'></input>
      {posts}
    </MyPostsWrapper>
  );
}

export default MyPosts;
