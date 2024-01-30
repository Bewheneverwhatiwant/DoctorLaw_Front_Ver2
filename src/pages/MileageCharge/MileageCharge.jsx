import styled from 'styled-components';
import MileageChargebackground from './MileageChargebackground';
import { useContext, useEffect } from 'react';
import { OutletContext } from '../ForOutlet';
import MileageList from './MileageList';
import MileagePay from './MileagePay';
import MileageInfo from './MileageInfo';

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

const CustomRow = styled.div`
display: flex;
flex-direction: row;
`;
const CustomColumn = styled.div`
display: flex;
flex-direction: column;
`;

const VerLine = styled.div`
width: 1px;
height: 650px;
background-color: #AEAEAE;
margin-left: 35px;
margin-right: 35px;
`;

const HorLine = styled.div`
width: 100%;
height: 1px;
background-color: #AEAEAE;
margin-top: 50px;
margin-bottom: 50px;
`;

export default function Component() {

    const setBackSetting = useContext(OutletContext);

    setBackSetting(false);


    return (
        <MileageChargebackground>
            <MainContainer>
                <CustomRow>
                    <MileageInfo />

                    <VerLine />
                    <CustomColumn>
                        <MileageList />
                        <HorLine />
                        <MileagePay />
                    </CustomColumn>
                </CustomRow>
            </MainContainer>
        </MileageChargebackground>
    );
};