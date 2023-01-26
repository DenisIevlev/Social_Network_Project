import styled from 'styled-components';
import user from './../../../../img/user.svg';

const PostPhoto = styled.img`
    width: 20px;
    height: 20px;
    margin: 10px 0px 0px 0px;
`;


const Post = (props) => {
  return (
       <div>
      <PostPhoto src={user} alt='profile-photo'></PostPhoto>
      <span>{props.postMessage}</span><br/>
      <span>like: {props.likeCount}</span>
    </div>
  );
}

export default Post
