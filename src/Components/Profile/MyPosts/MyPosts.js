import Post from './Post/Post';
import styled from 'styled-components';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const MyPostsWrapper = styled.div``;

const MyPostsTextarea = styled.textarea``;

const SendMyPostsText = styled.button`
margin: 5px 0px 0px 120px`;

const MyPosts = (props) => {
  const posts = props.posts.map(post => <Post key={post.id} postMessage={post.message} likeCount={post.likeCount} />);

  let addNewPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPostsWrapper>
      <h3 >My posts:</h3>
      <MyPostsTextarea onChange={onPostChange} placeholder='Enter your post' value={props.newPostText} rows="2" cols="20" ></MyPostsTextarea><br></br>
      <SendMyPostsText onClick={addNewPost} >Send</SendMyPostsText>
      {posts}
    </MyPostsWrapper>
  );
}

export default MyPosts;
