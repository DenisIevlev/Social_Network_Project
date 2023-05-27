import { authAPI } from '../api/api';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true
         }
      default:
         return state;
   }
};


export const setAuthUserData = (userID, email, login) => ({type: SET_AUTH_USER_DATA, data: {userID, email, login}});

export const getAuth = () => {
   return (dispatch) => {
      authAPI.getAuth().then(data => {
         if(data.resultCode == 0){
           let {userID, email, login} = data.data;
           dispatch(setAuthUserData(userID, email, login));
         }
       });
   }
}

export default authReducer;
