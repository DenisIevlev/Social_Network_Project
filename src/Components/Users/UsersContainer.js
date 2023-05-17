import { connect } from 'react-redux';
import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching, toggleFollowingInProgress } from '../../redux/usersReducer';
import {usersAPI} from '../../api/api';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
          this.props.setFetching(false);
          this.props.setUsers(data.items);
          this.props.setTotalUsersCount(data.totalCount);
        });
    };

  onPageChanged = (pageNumber) => {
    this.props.setFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.setFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
        follow={this.props.follow} unfollow={this.props.unfollow}
        currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
        users={this.props.users} isFetching={this.props.isFetching} followingInProgress={this.props.followingInProgress}
        toggleFollowingInProgress={this.props.toggleFollowingInProgress}/>
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
    followingInProgress: state.usersPage.followingInProgress
  }
};

export default connect(mapStateToProps,
  { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching, toggleFollowingInProgress })
  (UsersContainer);
