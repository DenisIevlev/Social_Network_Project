import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setFetching(true);
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    };
  };

  onPageChanged = (pageNumber) => {
    this.props.setFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
        follow={this.props.follow} unfollow={this.props.unfollow}
        currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
        users={this.props.users} isFetching={this.props.isFetching} />
    </>
  }
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
};

export default connect(mapStateToProps,
  { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching })
  (UsersContainer);
