import Message from './Message';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../redux/messagesReducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
    messagesPage: state.messagesPage,
    newMessageText: state.messagesPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      addNewMessage: () => dispatch(addMessageActionCreator()),
      updateNewMessage: (message) => dispatch(updateNewMessageActionCreator(message)),
    }
};

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;