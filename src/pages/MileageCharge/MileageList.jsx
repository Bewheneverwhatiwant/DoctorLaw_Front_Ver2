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
display: flex;
flex-direction: column;
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
`;

const Mileage = styled.div`
  width: 180px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 10px;
  
  & > .mileage-top {
    background-color: #122033;
    color: white;
    width: 100%;
    padding: 20px 0;
    font-size: 24px;
    font-weight: bold;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > .mileage-bottom {
    width: 98%;
    color: #122033;
    font-size: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 2px solid #122033;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MileageOption = styled(Mileage)`
  & > .mileage-top {
    background-color: ${props => props.isSelected ? '#AEAEAE' : '#122033'};
  }
  
  & > .mileage-bottom {
    border: 2px solid ${props => props.isSelected ? '#AEAEAE' : '#122033'};
    color: ${props => props.isSelected ? '#AEAEAE' : '#122033'};
  }
`;

export default function Component() {

    const [selectedMileage, setSelectedMileage] = useState(null);

    const handleClick = (option) => {
        setSelectedMileage(option);
    };

    const mileageOptions = [1, 2, 3, 4, 5];

    return (
        <MainContainer>
            <Column>
                <Title>결제금액</Title>
                <Detail>결제할 금액 옵션을 선택하세요.</Detail>
                <ContainerRow>
                    {mileageOptions.map((option) => (
                        <MileageOption
                            key={option}
                            isSelected={selectedMileage === option}
                            onClick={() => handleClick(option)}
                        >
                            <div className="mileage-top">{`${option * 10},000 P`}</div>
                            <div className="mileage-bottom">{`${8500 * option} 원`}</div>
                        </MileageOption>
                    ))}
                </ContainerRow>
            </Column>
        </MainContainer>
    );
};
