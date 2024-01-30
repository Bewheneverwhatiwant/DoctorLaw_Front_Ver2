import styled from 'styled-components';
import StyledImg from "../../Components/Container/CustomImg";

const SelectionTexts = styled.div`
    display: flex;
    width: 1340px;
    height: 60px;
    padding: 0px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 25px;
    border: 3px solid #3D3D46;
    background: linear-gradient(161deg, #343434 0%, #1A1A1A 53.44%);
    color: #FFF;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const MainContainer = styled.div`
    display : flex;
    flex-direction: column;
`

const AgreementBox = styled.a`
    margin-top: 20px;
    width: 1278px;
    height: 228px;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
`

const RowBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 50px;
`

const HowBox = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    width: 801px;
    padding: 33px 28px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 25px;
    border: 3px solid #3D3D46;
    background: linear-gradient(161deg, #343434 0%, #1A1A1A 53.44%);
`

const HowBoxTitle = styled.a`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`

const HowBoxContent = styled.a`
    color: #FFF;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`
const LetsAnalyzeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10%;
    margin-top: 90px;
`

const Iagree = styled.a`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const AnalyzeStartButton = styled.a`
width: 292.001px;
height: 60px;
flex-shrink: 0;
border-radius: 15px;
background: #606060;
color: #FFF;
text-align: center;
font-family: Inter;
font-size: 26px;
font-style: normal;
font-weight: 800;
line-height: normal;
display: flex;
justify-content: center;
align-items: center;
`
export default function Component() {
    return (
        <MainContainer>
            <SelectionTexts>Step 3 : 면책 조항 동의</SelectionTexts>
            <AgreementBox>
                AI 법률 분석 서비스 이용 약관<br/>
                본 서비스를 이용하기 전에, 다음의 이용 약관을 주의 깊게 읽어주시기 바랍니다. 본 서비스를 이용함으로써, 귀하는 다음의 조건들에 동의하는 것으로 간주됩니다.<br/>

                <br/> 1. 본 AI 법률 분석 서비스(이하 "닥터로우")는 법률 정보를 제공하는 목적으로만 사용되며, 법률 자문이나 법적 조언을 제공하지 않습니다.
                <br/> 2. 서비스는 "있는 그대로" 제공되며, 어떠한 명시적이거나 묵시적인 보증도 제공하지 않습니다. 서비스 제공자는 서비스의 사용으로 인해 발생할 수 있는 직접적, 간접적, 부수적, 특별, 징벌적 또는 결과적 손해에 대해 어떠한 책임도 지지 않습니다.
                <br/> 3. 서비스를 통해 제공되는 정보는 일반적인 정보로만 간주되어야 하며, 어떠한 상황에 대한 구체적인 법적 조언으로 해석되어서는 안 됩니다. 법적 문제에 대한 조언이 필요한 경우, 자격을 갖춘 법률 전문가에게 상담을 요청해야 합니다.
                <br/> 4. 서비스 제공자는 서비스를 통해 제공되는 정보의 정확성, 완전성 또는 최신성을 보장하지 않습니다.
                <br/> 5. 귀하는 서비스 이용과 관련하여 발생할 수 있는 모든 책임, 손실, 손해 및 비용에 대해 서비스 제공자를 면책시키고, 보호하기로 동의합니다.
                <br/> 6. 서비스 제공자는 언제든지 서비스의 내용을 변경하거나 서비스를 종료할 권리를 보유합니다.
                <br/> 7. 본 약관과 관련된 모든 분쟁은 대한민국 법률에 따라 해결됩니다. 본 서비스 이용으로 인해 발생하는 모든 분쟁은 대한민국의 법원을 관할 법원으로 합니다.
            </AgreementBox>
            <RowBox>
                <HowBox>
                    <HowBoxTitle>계약 내용 분석은 어떻게 이루어지나요?</HowBoxTitle>
                    <HowBoxContent>
                        AI가 과거의 데이터들을 기반으로 계약서에 숨겨놓은 독소조항들을 찾아냅니다.<br/>
                        독소조항인 이유를 설명하고 위험도를 분석하여 게이지로 표시해줍니다.<br/>
                        조항의 수정방향성을 제시해줍니다.
                    </HowBoxContent>
                </HowBox>
                <LetsAnalyzeContainer>
                    <Iagree>위 내용을 충분히 숙지했으며, 이에 동의합니다.</Iagree>
                    <AnalyzeStartButton>계약 내용 분석하기</AnalyzeStartButton>
                </LetsAnalyzeContainer>


            </RowBox>
        </MainContainer>
    );
}