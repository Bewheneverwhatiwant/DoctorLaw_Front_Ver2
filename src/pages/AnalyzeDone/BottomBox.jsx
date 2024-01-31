import styled from "styled-components";
import StyledImg from "../../Components/Container/CustomImg";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const UpperContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 1296px;
    padding: 30px;
    border-radius: 20px;
    background: #18181C;
`
const TextContainerColumn = styled.div`
    
`

const BigText = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const SmallText = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const PinkButton = styled.div`
    border-radius: 15px;
    background: #FB969C;
    width: 259px;
    height: 65px;
    flex-shrink: 0;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BlueButton = styled.div`
    border-radius: 15px;
    background: #1774D0;
    width: 259px;
    height: 65px;
    flex-shrink: 0;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Line = styled.div`
    width: 1px;
    height: 69px;
    background: #FFF;
`
const MidContainer = styled.div`
    
`
const BottomContainer = styled.div`
    
`

export default function Component() {
    return (
        <MainContainer>
            <UpperContainerRow>
                <TextContainerColumn>
                    <BigText>결과를 다운받아볼래요!</BigText>
                    <SmallText>오프라인 저장</SmallText>
                </TextContainerColumn>
                <PinkButton>결과 저장하기</PinkButton>
                <Line/>
                <TextContainerColumn>
                    <BigText>결과를 다운받아볼래요!</BigText>
                    <SmallText>오프라인 저장</SmallText>
                </TextContainerColumn>
                <BlueButton>결과 재생성하기</BlueButton>
            </UpperContainerRow>
            <MidContainer>

            </MidContainer>
            <BottomContainer>

            </BottomContainer>
        </MainContainer>
    );
};