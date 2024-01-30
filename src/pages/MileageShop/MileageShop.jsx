import styled from 'styled-components';
import MileageShopBackground from './MileageShopBackground';
import { useContext, useEffect } from 'react';
import { OutletContext } from '../ForOutlet';
import MyMileageContainer from './MyMileageContainer';
import MileageFunction from './MileageFunction';
import MileageHistory from './MileageHistory';

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
        <MileageShopBackground>
            <MainContainer>
                <MyMileageContainer />
                <Sizedbox height='30px' />
                <MileageFunction />
                <Sizedbox height='30px' />
                <MileageHistory />
                <Sizedbox height='30px' />
            </MainContainer>
        </MileageShopBackground>
    );
};