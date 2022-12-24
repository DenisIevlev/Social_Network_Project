import styled from 'styled-components';
import Post from './Post/Post';

const MyPosts = () => {
  return (
       <div>
      <span className='profile__info__myposts'>My posts:</span><br />
      <textarea className='profile__info__textarea' rows="5" cols="33" value="your news..."></textarea><br />
      <input type='button' value='Send'></input>
      <Post message ='Hi, how are you?' likeCount='0'/>
      <Post message ="It's my first post" likeCount='5'/>
    </div>
  );
}

export default MyPosts;
