import styled from 'styled-components';
import Header from './Header';
import React from 'react';
import { setAuthUserData, getAuth } from '../../redux/authReducer';
import { connect } from 'react-redux';

const Div = styled.div`
`;

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    return (
      <Div>
        <Header {...this.props} />
      </Div>
    );
  };
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData, getAuth })(HeaderContainer);
