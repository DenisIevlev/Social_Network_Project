import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Div = styled.div``;

const Link = styled(NavLink)`
text-decoration: none;
color: #000000;
&:hover {
  color: #00B388;
}
`;

const MessageItem = (props) => {
  let path = '/Messages/' + props.messageId;
  return (
    <Div>
      <Link to={path}> {props.name}</Link>
    </Div>
  );
}

export default MessageItem;
