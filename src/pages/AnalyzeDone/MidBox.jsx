import styled from "styled-components";
import StyledImg from "../../Components/Container/CustomImg";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
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
const OverallOpinion = styled.a`
    width: 417px;
    color: #FFF;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export default function Component() {
    return (
        <MainContainer>
            <BlackBoxRow>

                <WarningConditions>
                    <WarningTitleRow>
                        <StyledImg src={'img/경고아이콘yellow.svg'} width = '59px' height ='51px' />
                        <WarningTitle>수정 제안 사항</WarningTitle>
                    </WarningTitleRow>
                    <BadConditions>독소조항들</BadConditions>
                </WarningConditions>
                <CautionLevel>
                    <YourCautionLevel>전반적인 의견</YourCautionLevel>
                    <OverallOpinion>이 계약서는 한국외대 안에 있는 GS25라는 편의점의<br/>
                    근로계약서로 보이며 전체적으로 보았을때는 정말 잘 적<br/>
                    힌 것 같지만 ~항 ~번 조항을 보았을때 근로계약법 00조 00항에 어긋나는 것으로 의심되는 조항이 있으니 확
                    <br/>인을 바라며 .... 
                    </OverallOpinion>
                </CautionLevel>
            </BlackBoxRow>
        </MainContainer>
    );
};