import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserProfile } from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

export function withRouter(Children) {
  return (props) => {

    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || 2;
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
};

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
};

export default compose(withRouter, connect(mapStateToProps,{ getUserProfile }), WithAuthRedirect)(ProfileContainer);

