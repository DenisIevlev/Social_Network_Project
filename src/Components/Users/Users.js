import styled from 'styled-components';
import userPhoto from '../../img/user.svg';
import axios from 'axios';
import React from 'react';

const Div = styled.div``;

const Button = styled.button`margin: 0px 0px 10px 0px`;

const Img = styled.img`
    width: 40px;
    height: 40px;
`;

const Span = styled.span`
font-weight: ${props => props.selected ? 'bold' : 'none'};
}`;


class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    };
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    let slicedPages;
    let currentPage = this.props.currentPage;
    if (currentPage - 3 < 0) {
      slicedPages = pages.slice(0, 5);
    } else {
      slicedPages = pages.slice(currentPage - 3, currentPage + 2);
    }

    return (
      <Div>
        {this.props.users.map(users => <Div key={users.id}>
          <Div><Img src={users.photos.small != null ? users.photos.small : userPhoto} /></Div>
          <Div>{users.name} </Div> <Div>{users.status}</Div>
          <Div>{users.followed ? <Button onClick={() => this.props.unfollow(users.id)}>Unfollow</Button> : <Button onClick={() => this.props.follow(users.id)}>Follow</Button>}</Div>
        </Div>)}
        <Div>
          {slicedPages.map(page => {
            return <Span selected={this.props.currentPage === page} onClick={() => { this.onPageChanged(page) }}>{page}</Span>
          })}
        </Div>
      </Div>
    );
  }
};

export default Users;
