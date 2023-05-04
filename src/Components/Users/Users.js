import React from 'react';
import styled from 'styled-components';
import userPhoto from '../../img/user.svg';
import { NavLink } from 'react-router-dom';

const Div = styled.div``;

const Button = styled.button`
margin: 0px 0px 10px 0px`;

const Img = styled.img`
    width: 40px;
    height: 40px;
`;

const Span = styled.span`
font-weight: ${props => props.selected ? 'bold' : 'none'};
}`;

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let slicedPages;
  let currentPage = props.currentPage;
  if (currentPage - 3 < 0) {
    slicedPages = pages.slice(0, 5);
  } else {
    slicedPages = pages.slice(currentPage - 3, currentPage + 2);
  }
  return (
    <Div>
      {props.users.map(users => <Div key={users.id}>
        <Div><NavLink to={`/profile/${users.id}`}><Img src={users.photos.small != null ? users.photos.small : userPhoto} /></NavLink></Div>
        <Div>{users.name} </Div> <Div>{users.status}</Div>
        <Div>{users.follow ? <Button onClick={() => props.unfollow(users.id)}>Unfollow</Button> : <Button onClick={() => props.follow(users.id)}>Follow</Button>}</Div>
      </Div>)}
      <Div>
        {slicedPages.map(page => {
          return <Span selected={props.currentPage === page} onClick={() => { props.onPageChanged(page) }}>{page}</Span>
        })}
      </Div>
    </Div>
  );
}

export default Users;