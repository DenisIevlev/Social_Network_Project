import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setUsersTotalCountActionCreator } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => dispatch(followActionCreator(userID)),
    unfollow: (userID) => dispatch(unfollowActionCreator(userID)),
    setUsers: (userID) => dispatch(setUsersActionCreator(userID)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageActionCreator(currentPage)),
    setTotalUsersCount: (totalUsersCount) => dispatch(setUsersTotalCountActionCreator(totalUsersCount)),
  }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
