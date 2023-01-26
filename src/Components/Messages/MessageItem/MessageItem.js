import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const MessageLinks = styled.div``;

const MessageLink = styled(NavLink)`
text-decoration: none;
color: #000000;
&:hover {
  color: #00B388;
}
`;

const MessageItem = (props) => {
  let path = '/Messages/' + props.messageId;
  return (
    <MessageLinks>
      <MessageLink to={path}> {props.name}</MessageLink>
    </MessageLinks>
  );
}

export default MessageItem;
