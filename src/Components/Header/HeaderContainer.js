import styled from 'styled-components';
import Header from './Header';
import React from 'react';
import {setAuthUserData} from '../../redux/authReducer';
import {connect} from 'react-redux';
import {usersAPI} from '../../api/api';

const Div = styled.div`
`;

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getAuth().then(data => {
        if(data.resultCode == 0){
          let {id, email, login} = data.data;
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
