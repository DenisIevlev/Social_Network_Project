import styled from 'styled-components';
import Header from './Header';
import React from 'react';
import axios from 'axios';
import {setAuthUserData} from '../../redux/authReducer';
import {connect} from 'react-redux';

const Div = styled.div`
`;

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    })
      .then(response => {
        if(response.data.resultCode === 0){
          let {id, email, login} = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
