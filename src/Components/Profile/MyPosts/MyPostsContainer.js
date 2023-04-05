import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      addNewPost: () => dispatch(addPostActionCreator()),
      updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
