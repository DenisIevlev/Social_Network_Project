import Post from './Post/Post';
import styled from 'styled-components';
import React from 'react';

const Div = styled.div``;

const Textarea = styled.textarea``;

const Button = styled.button`
margin: 5px 0px 0px 120px`;

 const MyPosts = (props) => {
  const posts = props.posts.map(post => <Post key={post.id} postMessage={post.message} likeCount={post.likeCount} />);

  let onAddNewPost = () => {
    props.addNewPost();
  }

  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text);
  };

  return (
    <Div>
      <h3 >My posts:</h3>
      <Textarea onChange={onPostChange} placeholder='Enter your post' value={props.newPostText} rows="2" cols="20" ></Textarea><br></br>
      <Button onClick={onAddNewPost} >Send</Button>
      {posts}
    </Div>
  );
}

export default MyPosts;
