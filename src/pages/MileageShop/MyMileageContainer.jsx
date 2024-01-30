import styled from 'styled-components';
import StyledImg from '../../Components/Container/CustomImg';

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

const MileageContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
padding: 10px;
`;

const Title = styled.h1`
color: white;
font-size: 36px;
font-weight: bold;
`;

const MyMileageContainer = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
border: none;
border-radius: 10px;
background-image: linear-gradient(to right, #E797B8, #8B5EFF, #1774D0);
`;

const MyMileageText = styled.a`
font-size: 24px;
font-weight: bold;
font-color: white;
`;

const MyMileage = styled.div`
display: flex;
flex-direction: row;
background-color: white;
border: none;
border-radius: 10px;
align-items: flex-start;
color: black;
font-size: 36px;
font-weight: bold;
padding: 20px;
`;

export default function Component() {


    return (
        <MainContainer>
            <MileageContainer>
                <Title>마일리지 샵</Title>
                <Sizedbox height='30px' />
                <MyMileageContainer>
                    <MyMileageText>나의 마일리지</MyMileageText>
                    <Sizedbox height='15px' />
                    <MyMileage>
                        <StyledImg src={'img/icon_coin.png'} />
                        14,000 P
                    </MyMileage>
                </MyMileageContainer>
            </MileageContainer>

        </MainContainer>
    );
};
