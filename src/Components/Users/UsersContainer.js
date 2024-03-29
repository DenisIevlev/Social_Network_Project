import { connect } from 'react-redux';
import { compose } from 'redux';
import React from 'react';
import { follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers, isFollow, isUnfollow } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
        follow={this.props.follow} unfollow={this.props.unfollow}
        currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
        users={this.props.users} isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress} isFollow={this.props.isFollow}
        isUnfollow={this.props.isUnfollow} isAuth={this.props.isAuth} />
    </>
  }
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
};


export default compose(connect(mapStateToProps, {
  follow, unfollow,
  setCurrentPage, toggleFollowingInProgress,
  getUsers, isFollow,
  isUnfollow
}), WithAuthRedirect,)(UsersContainer);
