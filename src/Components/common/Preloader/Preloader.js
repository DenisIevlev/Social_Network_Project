import styled from 'styled-components';
import preloader from '../../../img/preloader.svg';

const Img = styled.img`
    width: 100px;
    height: 100px;
`;

const Preloader = () => {
  return (
    <div>
     <Img src={preloader} alt='spinner'/>
    </div>
  );
}

export default Preloader;
