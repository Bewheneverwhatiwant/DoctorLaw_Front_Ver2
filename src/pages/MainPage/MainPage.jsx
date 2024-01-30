import styled from 'styled-components';
import MainBackground from './MainBackground';
import { useContext, useEffect } from 'react';
import { OutletContext } from '../ForOutlet';
import TopBanner from './TopBanner';
import CurvedBanner from './CurvedBanner';
import FunctionBanner from './FunctionBanner';
import PriceBanner from './PriceBanner';
import ModelBanner from './ModelBanner';
import ShopBanner from './ShopBanner';


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const Sizedbox = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || '50px'};
`;

export default function Component() {

  const setBackSetting = useContext(OutletContext);

  setBackSetting(true);


  return (
    <MainBackground>
      <MainContainer>
        <TopBanner />
        <CurvedBanner />
        <Sizedbox />
        <FunctionBanner />
        <Sizedbox />
        <PriceBanner />
        <Sizedbox />
        <Sizedbox />
        <ModelBanner />
        <Sizedbox />
        <ShopBanner />
        <Sizedbox height='250px' />
      </MainContainer>
    </MainBackground>
  );
};