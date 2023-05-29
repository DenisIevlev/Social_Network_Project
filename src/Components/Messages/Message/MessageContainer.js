import Message from './Message';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../redux/messagesReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';


let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    newMessageText: state.messagesPage.newMessageText,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: () => dispatch(addMessageActionCreator()),
    updateNewMessage: (message) => dispatch(updateNewMessageActionCreator(message)),
  }
};

const MessageContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Message);

export default MessageContainer;