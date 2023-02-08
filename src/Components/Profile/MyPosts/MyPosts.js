import Post from './Post/Post';
import styled from 'styled-components';
import React from 'react';


const MyPostsWrapper = styled.div``;

const MyPosts = (props) => {
  const posts = props.posts.map(post => <Post key={post.id} postMessage={post.message} likeCount={post.likeCount}/>);
  
  let newPostElement = React.createRef();
  let addNewPost = () => {
     let text = newPostElement.current.value;
     props.addPost(text);
  }
  return (
       <MyPostsWrapper>
      <h3 >My posts:</h3>
      <textarea ref={newPostElement} className='profile__info__textarea' rows="2" cols="20" ></textarea><br />
      <input onClick={addNewPost}type='button' value='Send'></input>
      {posts}
    </MyPostsWrapper>
  );
}

export default MyPosts;
