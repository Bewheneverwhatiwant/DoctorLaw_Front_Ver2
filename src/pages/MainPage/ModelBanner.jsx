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

const Sizedbox = styled.div`
width: 30px;
height: 30px;
`;

const Title = styled.h1`
text-align: left;
background: -webkit-linear-gradient(#E797B8, #8B5EFF, #1774D0); 
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
color: transparent;
font-weight: bold;
font-size: 48px;
margin-bottom: 10px;
`;

const Detail = styled.a`
color: white;
font-size: 18px;
line-height: 25px;
text-align: left;
`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`;

const CustomRow = styled.div`
display: flex;
flex-direction: row;
gap: 40px;
align-items: center;
`;

export default function Component() {
    return (
        <MainContainer>
            <CustomRow>
                <StyledImg src={'img/img_gpt4.png'} />
                <Sizedbox />
                <TextContainer>
                    <Title>GPT-4 turbo 모델</Title>
                    <Detail>잠깐의 수익을 위해 어설픈 모델을 쓰지 않습니다.<br />
                        비용이 많이 들더라도, 최고의 성능을 낼 수 있는<br />
                        최고의 모델을 사용합니다.</Detail>
                </TextContainer>
            </CustomRow>
        </MainContainer>
    );
};
