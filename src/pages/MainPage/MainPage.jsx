import styled from 'styled-components';
import MainBackground from './MainBackground';
import { useContext, useEffect } from 'react';
import { OutletContext } from '../ForOutlet';
import TopBanner from './TopBanner';


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

export default function Component() {

  const setBackSetting = useContext(OutletContext);

  setBackSetting(true);


  return (
    <MainBackground>
      <MainContainer>
        <TopBanner />
      </MainContainer>
    </MainBackground>
  );
};