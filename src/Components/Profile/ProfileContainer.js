import Profile from './Profile';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';

export function withRouter(Children) {
  return (props) => {

    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || 2;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUsersProfile(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
};

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,
  { setUsersProfile })
  (WithUrlDataContainerComponent);

