import {Navigate} from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => {
    return {
      isAuth: state.auth.isAuth
    }
  };

export const WithAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to={'/login'}></Navigate>
        return <Component {...props} />
    }

    let AuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return AuthRedirectComponent;
};