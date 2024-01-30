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
margin: 10px;
`;

const Detail = styled.a`
font-size: 18px;
color: white;
margin: 10px;
`;

const FunctionContainer = styled.div`
display: flex;
flex-direction: column;
`;

const Function = styled.div`
display: flex;
flex-direction: row;
border-radius: 15px;
background-color: #222228;
gap: 20px;
padding: 25px;
margin: 10px;
justify-content: space-between;
`;

const CustomRow = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
justify-content: flex-start;
`;

const CustomRow2 = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
justify-content: flex-end;
`;

const ImgContainer = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
border: none;
padding: 10px;
`;

const ImgText1 = styled.a`
color: white;
font-size: 16px;
line-height: 20px;
margin-top: 5px;
`;

const ImgText2 = styled.a`
color: white;
font-size: 16px;
line-height: 20px;
margin-top: 5px;
text-align: right;
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

const FunctionTitle2 = styled.h1`
font-size: 48px;
font-weight: bold;
color: #FB969C;
margin-bottom: 10px;
text-align: right;
`;

const SemiTitle2 = styled.h1`
font-size: 40px;
font-weight: bold;
color: white;
margin-bottom: 10px;
text-align: right;
`;

const Sizedbox = styled.div`
width: 5px;
height: 30px;
`;

const Line = styled.div`
width: ${props => props.width || '100px'};
height: 1px;
background-color: #F0F0F0;
margin: 10px;
`;

const AnButton = styled.button`
background-color: #8B5EFF;
border-radius: 15px;
color: white;
font-weight: bold;
font-size: 20px;
padding: 10px;
width: 280px;
height: 60px;
border: none;
`;

const CheckButton = styled.button`
background-color: #122033;
border-radius: 15px;
color: white;
font-weight: bold;
font-size: 20px;
padding: 10px;
width: 280px;
height: 60px;
border: none;
`;

export default function Component() {
    return (
        <MainContainer>
            <FunctionContainer>
                <Title>기능소개</Title>
                <Detail>법률 문서를 다룰 수 있는 닥터로우만의 독특한 서비스를 알려드립니다.</Detail>
                <Sizedbox />
                <Function>
                    <ContainerColumn>
                        <FunctionTitle>계약 내용 분석</FunctionTitle>
                        <SemiTitle>이미지, PDF 일괄 지원</SemiTitle>
                        <Line width='560px' />
                        <CustomRow>
                            <AnButton>계약 내용 분석 바로가기</AnButton>
                            <CheckButton>내 분석 기록 확인하기</CheckButton>
                        </CustomRow>
                    </ContainerColumn>
                    <ImgContainer>
                        <StyledImg src={'img/main_function_1.png'} width='300px' height='100px' />
                        <ImgText2>위험한 조항이 있는지 확인하고<br />내용을 이해하기 쉽게 요약해드립니다</ImgText2>
                    </ImgContainer>
                </Function>
                <Sizedbox />
                <Function>
                    <ImgContainer>
                        <StyledImg src={'img/main_function_2.png'} width='300px' height='100px' />
                        <ImgText1>위험한 조항이 있는지 확인하고<br />내용을 이해하기 쉽게 요약해드립니다</ImgText1>
                    </ImgContainer>
                    <ContainerColumn>
                        <FunctionTitle2>계약 문서 생성</FunctionTitle2>
                        <SemiTitle2>철저한 가이드라인으로 간단한 설계</SemiTitle2>
                        <Line width='630px' />
                        <CustomRow2>
                            <AnButton>문서 자동생성 바로가기</AnButton>
                        </CustomRow2>
                    </ContainerColumn>
                </Function>
            </FunctionContainer>
        </MainContainer>
    );
};
