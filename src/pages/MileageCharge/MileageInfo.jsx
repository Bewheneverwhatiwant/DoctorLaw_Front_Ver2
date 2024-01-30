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

const Column = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 20px;
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

const Line = styled.div`
width: 100%;
height: 1px;
background-color: #122033;
margin-top: 30px;
margin-bottom: 30px;
`;

const AfterText = styled.h1`
font-size: 16px;
font-weight: bold;
color: black;
text-align: right;
`;

const Mileage = styled.h1`
font-size: 24px;
font-weight: bold;
color: #0167FF;
text-align: right;
margin-top: 15px;
margin-bottom: 15px;
`;

const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: right;
`;

const Agree = styled.button`
background-color: #FF7B3F;
color: white;
font-size: 12px;
padding: 10px;
border-radius: 10px;
border: none;
`;

const Button = styled.div`
width: 200px;
height: 40px;
background-color: #122033;
border-radius: 10px;
color: white;
padding: 10px;
border: none;
font-size: 20px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
`;

const Center = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;

export default function Component() {


    return (
        <MainContainer>
            <Column>
                <Title>마일리지 충전하기</Title>
                <Sizedbox height='60px' />
                <ContainerColumn>
                    <ContainerRow>
                        <Detail>계정</Detail>
                        <Detail>doctorlaw@gmail.com</Detail>
                    </ContainerRow>
                    <ContainerRow>
                        <Detail>결제금액</Detail>
                        <Detail>8,500 원</Detail>
                    </ContainerRow>
                    <ContainerRow>
                        <Detail>충전 마일리지</Detail>
                        <Detail>10,000 P</Detail>
                    </ContainerRow>
                </ContainerColumn>
                <Line />
                <Right>
                    <AfterText>충전 후 마일리지</AfterText>
                    <Mileage>23,000 P</Mileage>
                </Right>
                <ContainerRow>
                    <Detail>
                        상품, 가격 및 유효기간을 확인하였으며, 계약 관련 고지사항과<br />닥터로우 가상 재화 정책 및 결제 진행에 동의합니다.
                    </Detail>
                    <Agree>동의</Agree>
                </ContainerRow>
                <Sizedbox height='200px' />
                <Center>
                    <Button>결제하기</Button>
                </Center>
            </Column>
        </MainContainer>
    );
};