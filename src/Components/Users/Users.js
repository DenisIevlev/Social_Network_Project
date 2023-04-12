import styled from 'styled-components';
import userPhoto from '../../img/user.svg';
import axios from 'axios';

const UsersWrapper = styled.div``;

const UsersPhotoWrapper = styled.div``;

const UserInfoWrapper = styled.div``;

const UsersButton = styled.button`margin: 0px 0px 10px 0px`;

const UsersPhoto = styled.img`
    width: 40px;
    height: 40px;
`;

const Users = (props) => {
  const getUsers = () => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUsers(response.data.items);
      });
    };
  };
  return <UsersWrapper> 
    <UsersButton onClick={getUsers}>Get Users</UsersButton>
    {props.users.map(users => <UserInfoWrapper key={users.id}>
      <UsersPhotoWrapper><UsersPhoto src={users.photos.small != null ? users.photos.small : userPhoto} /></UsersPhotoWrapper>
      <UserInfoWrapper>{users.name} </UserInfoWrapper> <UserInfoWrapper>{users.status}</UserInfoWrapper>
      <UserInfoWrapper></UserInfoWrapper><UserInfoWrapper></UserInfoWrapper>
      <UserInfoWrapper>{users.followed ? <UsersButton onClick={() => props.follow(users.id)}>Follow</UsersButton> :  <UsersButton onClick={() => props.unfollow(users.id)}>Unfollow</UsersButton>}</UserInfoWrapper>
    </UserInfoWrapper>)}
  </UsersWrapper>
};

export default Users;
