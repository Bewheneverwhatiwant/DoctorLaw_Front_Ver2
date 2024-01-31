import styled from "styled-components";
import StyledImg from "../../Components/Container/CustomImg";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    color: #000;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 80px; /* 166.667% */
`
const BlackBoxRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
`

const CautionLevel = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 473px;
    height: 703px;
    flex-shrink: 0;
    border-radius: 25px;
    border: 3px solid #3D3D46;
    background: linear-gradient(161deg, #343434 0%, #1A1A1A 53.44%);
    gap: 45px;
`

const WarningConditions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 785px;
    height: 703px;
    flex-shrink: 0;
    border-radius: 25px;
    border: 3px solid #3D3D46;
    background: linear-gradient(161deg, #343434 0%, #1A1A1A 53.44%);
`

const YourCautionLevel = styled.a`
    color: #FFF;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 752;
    line-height: normal;
    margin-top: 30px;
`

const LevelRouletteRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-top: 20px;

`

const LevelText = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const Description = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const WarningTitleRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
`

const WarningTitle = styled.a`
    color: #FFF;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 752;
    line-height: normal;
`
const BadConditions = styled.a`
    color: #FFF;
    font-family: Inter;
    font-size: 18px;
    font-style: italic;
    font-weight: 752;
    line-height: normal;
    margin-top: 20px;
`

export default function Component() {
    return (
        <MainContainer>
            <Title>계약 내용 분석</Title>
            <BlackBoxRow>
                <CautionLevel>
                    <YourCautionLevel>주의 등급입니다.</YourCautionLevel>
                    <LevelRouletteRow>
                        <StyledImg src={'img/안전아이콘.svg'} width= '50px' height = '50px' />
                        <LevelText>안전</LevelText>
                        <Description>계약서의 조항 중<br/>0~5%가 독소조항 입니다.</Description>
                    </LevelRouletteRow>
                    <LevelRouletteRow>
                        <StyledImg src={'img/주의아이콘.svg'} width= '50px' height = '50px' />
                        <LevelText>주의</LevelText>
                        <Description>계약서의 조항 중<br/>0~5%가 독소조항 입니다.</Description>
                    </LevelRouletteRow>
                    <LevelRouletteRow>
                        <StyledImg src={'img/경고아이콘.svg'} width= '50px' height = '50px' />
                        <LevelText>경고</LevelText>
                        <Description>계약서의 조항 중<br/>0~5%가 독소조항 입니다.</Description>
                    </LevelRouletteRow>
                    <LevelRouletteRow>
                        <StyledImg src={'img/위험아이콘.svg'} width= '50px' height = '50px' />
                        <LevelText>위험</LevelText>
                        <Description>계약서의 조항 중<br/>0~5%가 독소조항 입니다.</Description>
                    </LevelRouletteRow>
                    <LevelRouletteRow>
                        <StyledImg src={'img/망함아이콘.svg'} width= '50px' height = '50px' />
                        <LevelText>망함</LevelText>
                        <Description>계약서의 조항 중<br/>0~5%가 독소조항 입니다.</Description>
                    </LevelRouletteRow>

                </CautionLevel>
                <WarningConditions>
                    <WarningTitleRow>
                        <StyledImg src={'img/경고이미지Red.svg'} width = '59px' height ='51px' />
                        <WarningTitle>주의해야 할 조항</WarningTitle>
                    </WarningTitleRow>
                    <BadConditions>독소조항들</BadConditions>
                </WarningConditions>
            </BlackBoxRow>
        </MainContainer>
    );
};