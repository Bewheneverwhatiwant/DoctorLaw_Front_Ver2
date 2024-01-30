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

const Title = styled.h1`
font-size: 48px;
font-weight: bold;
color: white;
margin-bottom: 10px;
`;

const Detail = styled.a`
font-size: 18px;
color: white;
`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-bottom: 50px;
`;

const FunctionContainer = styled.div`
display: flex;
flex-direction: column;
`;

const Function = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
`;

const ImgContainer = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
border: none;
color: white;
font-size: 16px;
padding: 10px;
`;

const FunctionTitle = styled.h1`
font-size: 48px;
font-weight: bold;
color: #FB969C;
margin-bottom: 10px;
`;

const SemiTitle = styled.h1`
font-size: 40px;
font-weight: bold;
color: white;
margin-bottom: 10px;
`;

export default function Component() {
    return (
        <MainContainer>
            <TextContainer>
                <Title>기능소개</Title>
                <Detail>법률 문서를 다룰 수 있는 닥터로우만의 독특한 서비스를 알려드립니다.</Detail>
            </TextContainer>
            <FunctionContainer>
                <Function>
                    <ContainerColumn>
                        <FunctionTitle>계약 내용 분석</FunctionTitle>
                        <SemiTitle>이미지, PDF 일괄 지원</SemiTitle>
                    </ContainerColumn>
                    <ImgContainer>
                        <StyledImg src={'img/main_function_1.png'} width='100px' height='100px' />
                        위험한 조항이 있는지 확인하고<br />내용을 이해하기 쉽게 요약해드립니다
                    </ImgContainer>
                </Function>
                <Function>
                    <ImgContainer>
                        <StyledImg src={'img/main_function_1.png'} width='100px' height='100px' />
                        위험한 조항이 있는지 확인하고<br />내용을 이해하기 쉽게 요약해드립니다
                    </ImgContainer>
                    <ContainerColumn>
                        <FunctionTitle>계약 내용 분석</FunctionTitle>
                        <SemiTitle>이미지, PDF 일괄 지원</SemiTitle>
                    </ContainerColumn>
                </Function>
            </FunctionContainer>
        </MainContainer>
    );
};
