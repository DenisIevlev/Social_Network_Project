import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow:   (userID) => dispatch(followActionCreator(userID)),
    unfollow: (userID) => dispatch(unfollowActionCreator(userID)),
    setUsers: (userID) => dispatch(setUsersActionCreator(userID)),
  }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
