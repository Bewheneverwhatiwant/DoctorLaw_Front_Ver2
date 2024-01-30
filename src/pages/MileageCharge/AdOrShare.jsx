import React, { useState } from 'react';
import styled from 'styled-components';
import StyledImg from '../../Components/Container/CustomImg';
import ContainerRow from '../../Components/Container/ContainerRow';
import ContainerColumn from '../../Components/Container/ContainerColumn';

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

const Row = styled.div`
width: 100%;
display: flex;
flex-direction: Row;
align-items: center;
justify-content: center;
gap: 20px;
`;

const Title = styled.h1`
color: black;
font-size: 36px;
font-weight: bold;
`;

const Detail = styled.a`
color: #AEAEAE;
font-size: 12px;
font-weight: bold;
margin-top: 10px;
margin-bottom: 10px;
`;

const Container1 = styled.div`
border: 1px solid #D6E4F7;
border-radius: 20px;
display: flex;
flex-direction: row;
gap: 20px;
padding: 20px;
`;

const Container2 = styled.div`
border: 1px solid #FFD2BD;
border-radius: 20px;
display: flex;
flex-direction: row;
gap: 20px;
padding: 20px;
`;

const ButtonContainer1 = styled.div`
width: 250px;
border: none;
border-radius: 20px;
display: flex;
flex-direction: row;
background-color: #122033;
padding: 10px;
align-items: center;
justify-content: center;
`;

const ButtonContainer2 = styled.div`
width: 250px;
border: none;
border-radius: 20px;
display: flex;
flex-direction: row;
background-color: #FF7B3F;
padding: 10px;
align-items: center;
justify-content: center;
`;

const ButtonTitle = styled.h1`
font-size: 24px;
font-weight: bold;
color: white;
`;

const ButtonDetail = styled.a`
font-size: 12px;
font-weight: bold;
color: white;
`;

const CustomColumn = styled.div`
display: flex;
flex-direction: column;
`;

export default function Component() {


    return (
        <MainContainer>
            <Row>
                <Container1>
                    <CustomColumn>
                        <Title>광고 보고 무료 마일리지 받기</Title>
                        <Detail>30초 동영상 광고를 시청하고 1000 마일리지를 받으세요!</Detail>

                    </CustomColumn>
                    <ButtonContainer1>
                        <StyledImg src={'img/icon_watch.svg'} />
                        <CustomColumn>
                            <ButtonTitle>광고시청</ButtonTitle>
                            <ButtonDetail>1000 마일리지 적립!</ButtonDetail>
                        </CustomColumn>
                    </ButtonContainer1>
                </Container1>

                <Container2>
                    <CustomColumn>
                        <Title>공유하고 무료 마일리지 받기</Title>
                        <Detail>닥터로우를 친구들에게 공유하고 500 마일리지를 받으세요!</Detail>

                    </CustomColumn>
                    <ButtonContainer2>
                        <StyledImg src={'img/icon_share.svg'} />
                        <CustomColumn>
                            <ButtonTitle>공유하기</ButtonTitle>
                            <ButtonDetail>500 마일리지 적립!</ButtonDetail>
                        </CustomColumn>
                    </ButtonContainer2>
                </Container2>
            </Row>
        </MainContainer>
    );
};