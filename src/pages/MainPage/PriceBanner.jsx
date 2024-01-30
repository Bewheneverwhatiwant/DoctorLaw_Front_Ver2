import styled from 'styled-components';
import ContainerRow from '../../Components/Container/ContainerRow';
import ContainerColumn from '../../Components/Container/ContainerColumn';
import StyledImg from '../../Components/Container/CustomImg';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const MainTitle = styled.h1`
font-size: 48px;
font-weight: bold;
color: #898989;
margin-bottom: 20px;
`;

const MainDetail = styled.a`
font-size: 18px;
color: #898989;
`;

const PriceContainer = styled.div`
width: 300px;
display: flex;
flex-direction: column;
text-align: left;
background-color: #222228;
border-radius: 15px;
border: none;
padding: 10px;
`;

const UseContainer = styled.div`
width: 50px;
border-radius: 10px;
padding: 10px;
background-color: ${props => props.bgColor || 'white'};
color: black;
margin-bottom: 20px;
font-weight: bold;
`;

const Title = styled.h1`
font-size: 48px;
font-weight: bold;
color: white;
`;

const Detail = styled.a`
font-size: 30px;
color: #898989;
margin-bottom: 20px;
text-decoration: line-through;
`;

const Point = styled.h1`
font-size: 60px;
font-weight: bold;
color: #1774D0;
`;

const Right = styled.div`
display: flex;
align-items: right;
justify-content: flex-end;
`;

const Button = styled.button`
border-radius: 10px;
border: none;
background-color: #1774D0;
color: #222228;
font-size: 28px;
font-weight: bold;
padding: 10px;
`;

const Sizedbox = styled.div`
width: 30px;
height: 30px;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
`;

export default function Component() {
    return (
        <MainContainer>
            <Container>
                <MainTitle>가격 부담</MainTitle>
                <MainDetail>단순한 검토, 초안 작성조차 비싼 비용이 걱정되시나요?</MainDetail>
                <Sizedbox />
                <ContainerRow>
                    <PriceContainer>
                        <UseContainer bgColor='white'>이용권</UseContainer>
                        <Title>1회 이용권</Title>
                        <Sizedbox />
                        <Detail>1,200 P</Detail>
                        <Point>1,000 P</Point>
                        <Sizedbox />
                        <Right>
                            <Button>구매하러 가기</Button>
                        </Right>
                    </PriceContainer>
                    <Sizedbox />
                    <PriceContainer>
                        <UseContainer bgColor='white'>이용권</UseContainer>
                        <Title>5회 이용권</Title>
                        <Sizedbox />
                        <Detail>6,000 P</Detail>
                        <Point>4,500 P</Point>
                        <Sizedbox />
                        <Right>
                            <Button>구매하러 가기</Button>
                        </Right>
                    </PriceContainer>
                    <Sizedbox />
                    <PriceContainer>
                        <UseContainer bgColor='orange'>구독권</UseContainer>
                        <Title>1달 이용권</Title>
                        <Sizedbox />
                        <Detail>1,200 P X ∞ </Detail>
                        <Point>10,000 P</Point>
                        <Sizedbox />
                        <Right>
                            <Button>구매하러 가기</Button>
                        </Right>
                    </PriceContainer>
                </ContainerRow>
            </Container>
        </MainContainer>
    );
};
