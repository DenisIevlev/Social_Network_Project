import styled from 'styled-components';
import userPhoto from '../../img/user.svg';

const UsersWrapper = styled.div``;

const UsersPhotoWrapper = styled.div``;

const UserInfoWrapper = styled.div``;

const UsersButton = styled.button`margin: 0px 0px 10px 0px`;

const UsersPhoto = styled.img`
    width: 20px;
    height: 20px;
`;

const Users = (props) => { 
  if (props.users.length === 0) {
  props.setUsers([{ id: 1, username: 'Victor', photoURL: userPhoto, status: 'Make love not war ', location: { country: 'Ukraine', city: 'Nikolaev' }, follow: true, },
  { id: 2, username: 'John', photoURL: userPhoto, status: 'Remember who you are ', location: { country: 'USA', city: 'Washington' }, follow: true, },
  { id: 3, username: 'Paul', photoURL: userPhoto, status: 'Live without regrets ', location: { country: 'Italy', city: 'Rome' }, follow: true, }]);
  };
  return <UsersWrapper>
    {props.users.map(users => <UserInfoWrapper key={users.id}>
      <UsersPhotoWrapper><UsersPhoto src={users.photoURL} /></UsersPhotoWrapper>
      <UserInfoWrapper>{users.username} </UserInfoWrapper> <UserInfoWrapper>{users.status}</UserInfoWrapper>
      <UserInfoWrapper>{users.location.country}</UserInfoWrapper><UserInfoWrapper>{users.location.city}</UserInfoWrapper>
      <UserInfoWrapper>{users.follow ? <UsersButton onClick={() => props.unfollow(users.id)}>Follow</UsersButton> : <UsersButton onClick={() => props.follow(users.id)}>Unfollow</UsersButton>}</UserInfoWrapper>
      </UserInfoWrapper>)}
  </UsersWrapper>
};

export default Users;
