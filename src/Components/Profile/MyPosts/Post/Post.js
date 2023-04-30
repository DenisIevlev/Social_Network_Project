import styled from 'styled-components';
import user from './../../../../img/user.svg';

const Div  = styled.div`
`;
const Img  = styled.img`
    width: 20px;
    height: 20px;
    margin: 10px 0px 0px 0px;
`;
const Span = styled.span`
`;


const Post = (props) => {
  return (
       <Div>
      <Img src={user} alt='profile-photo'></Img>
      <Span>{props.postMessage}</Span><br/>
      <Span>like: {props.likeCount}</Span>
    </Div>
  );
}

export default Post
