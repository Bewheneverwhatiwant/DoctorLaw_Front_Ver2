import styled from 'styled-components';
import MainBackground from './MainBackground';
import ContainerRow from '../../Components/Container/ContainerRow';
import { useEffect } from 'react';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

export default function Component({ $setting }) {

  useEffect(() => { $setting(true) }, []);

  return (
    <MainBackground>
      <MainContainer>



      </MainContainer>
    </MainBackground>
  );
};