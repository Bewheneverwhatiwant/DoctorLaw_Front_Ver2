import React, { useState } from 'react';
import styled from 'styled-components';
import StyledImg from '../../Components/Container/CustomImg';
import ContainerRow from '../../Components/Container/ContainerRow';

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
font-size: 20px;
font-weight: bold;
`;

const Detail = styled.a`
color: #AEAEAE;
font-size: 12px;
font-weight: bold;
margin-top: 10px;
margin-bottom: 10px;
`;

const Small = styled.div`
width: 200px;
height: 40px;
  background-color: #122033;
  color: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Big = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  border: 2px solid #122033;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-top: 50px;
`;

const SmallContainer = styled.div`
  position: absolute; 
  top: -45px; // Big 컨테이너의 상단 경계선 바깥에 위치
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
`;


export default function Component() {
    const [selected, setSelected] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const paymentOptions = {
        '간편결제': ['토스페이', '카카오페이', '네이버페이', '페이코'],
        '신용카드': ['간편 카드 결제', '일반 카드 결제'],
        '기타 결제': ['계좌이체', '가상계좌', '휴대폰 결제', '도서 문화 상품권']
    };

    const handleSelect = (option) => {
        setSelected(option);
        setSelectedPaymentMethod(null); // 새로운 결제수단을 선택할 때마다 결제방법 초기화
    };

    const handlePaymentMethodSelect = (method) => {
        setSelectedPaymentMethod(method);
    };

    return (
        <MainContainer>
            <Column>
                <Title>결제수단</Title>
                <Detail>결제하실 방식을 선택하세요.</Detail>
                <Big>
                    <SmallContainer>
                        {Object.keys(paymentOptions).map((option, index) => (
                            <Small
                                key={index}
                                style={{
                                    backgroundColor: selected === option ? '#122033' : 'white',
                                    color: selected === option ? 'white' : '#AEAEAE',
                                    border: '2px solid #AEAEAE',
                                    borderBottom: '2px solid #122033',
                                }}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </Small>
                        ))}
                    </SmallContainer>
                    {selected && paymentOptions[selected].map((method, index) => (
                        <div key={index}>
                            <input type="radio" id={method} name="paymentMethod" />
                            <label htmlFor={method}>{method}</label>
                        </div>
                    ))}
                </Big>
            </Column>
        </MainContainer>
    );
};