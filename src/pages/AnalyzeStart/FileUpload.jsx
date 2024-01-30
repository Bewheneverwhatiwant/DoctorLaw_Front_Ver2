import styled from "styled-components";
import StyledImg from "../../Components/Container/CustomImg";

const MainContainer = styled.div`
    display: flex;
    flex-direction : column;
`;

const AnalyzeTitle = styled.h1`
    color: #000;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 80px; /* 166.667% */
`;

const Upload = styled.div`
    display: flex;
    align-items : row;
    gap: 40px;
`;

const Steps = styled.div`
    width: 234px;
    height: 376px;
    display: inline-flex;
    padding: 33px 28px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 25px;
    border: 3px solid #3D3D46;
    background: linear-gradient(161deg, #343434 0%, #1A1A1A 53.44%);
`;

const UploadColumnContainer = styled.div`
    display: flex;
    flex-direction : column;
`;

const Step1Text = styled.div`
    display: flex;
    width: 1014px;
    height: 60px;
    padding: 0px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 25px;
    order: 3px solid #3D3D46;
    background: linear-gradient(161deg, #343434 0%, #1A1A1A 53.44%);
    color: #FFF;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const UploadRowContainer = styled.div`
    
    display: flex;
    flex-direction: Row;
    gap: 100px;
    margin-left: 60px;
    margin-top: 50px;
`;
const FinderColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const FinderColumn2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;
const ImgText1 = styled.a`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const ImgText2 = styled.a`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const ImgText3 = styled.a`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 140px;
`;

const PossibleRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const StepsText = styled.a`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const CheckListRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    ;
`

const LevelTextBox = styled.div`
    display: flex;
    flex-direction: column;
`

const LevelText1 = styled.a`
    color: #FFF;
    text-align: left;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const LevelText2 = styled.a`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const CheckListBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 45px;
    margin-left: 30px;
`

export default function Component() {
    return (
        <MainContainer>
            <AnalyzeTitle>계약 내용 분석</AnalyzeTitle>
            <Upload>
                <Steps>
                    <StepsText>Steps</StepsText>
                    <CheckListBox>
                        <CheckListRow>
                            <StyledImg src={'img/체크라디오.svg'} width = '40px' height = '40px' />
                            <LevelTextBox>
                                <LevelText1>1단계</LevelText1>
                                <LevelText2>파일 업로드</LevelText2>
                            </LevelTextBox>
                        </CheckListRow>
                        <CheckListRow>
                            <StyledImg src={'img/체크라디오.svg'} width = '40px' height = '40px' />
                            <LevelTextBox>
                                <LevelText1>2단계</LevelText1>
                                <LevelText2>이용권 선택</LevelText2>
                            </LevelTextBox>
                        </CheckListRow>
                        <CheckListRow>
                            <StyledImg src={'img/체크라디오.svg'} width = '40px' height = '40px' />
                            <LevelTextBox>
                                <LevelText1>3단계</LevelText1>
                                <LevelText2>면책 조항 동의</LevelText2>
                            </LevelTextBox>
                        </CheckListRow>
                        <CheckListRow>
                            <StyledImg src={'img/체크라디오.svg'} width = '40px' height = '40px' />
                            <LevelTextBox>
                                <LevelText1>4단계</LevelText1>
                                <LevelText2>계약 분석 시작</LevelText2>
                            </LevelTextBox>
                        </CheckListRow>
                    </CheckListBox>

                </Steps>
                <UploadColumnContainer>
                    <Step1Text>Step 1: 파일 업로드</Step1Text>
                    <UploadRowContainer>
                        <FinderColumn>
                            <StyledImg src={'img/업로드아이콘.svg'} width = '110px' height = '110px' />
                            <ImgText1>여기에 파일을 드래그 & 드롭</ImgText1>
                            <ImgText2>또는</ImgText2>
                            <StyledImg src={'img/파일직접탐색버튼.svg'} width = '315px' height = '49px' />
                            <ImgText2> 선택된 파일 : </ImgText2>
                        </FinderColumn>
                        <FinderColumn2>
                            <ImgText3> 지원되는 파일 형태 </ImgText3>
                            <PossibleRow>
                                <StyledImg src={'img/PDF아이콘.svg'} width = '52px' height = '63px' />
                                <ImgText2>PDF 전자 문서 (OCR 처리 필요)</ImgText2>
                            </PossibleRow>
                            <PossibleRow>
                                <   StyledImg src={'img/JPG아이콘.svg'} width = '71px' height = '57px' />
                                <ImgText2> JPG, PNG 등의 이미지 파일 </ImgText2>
                            </PossibleRow>
                        </FinderColumn2>
                    </UploadRowContainer>


                    
                </UploadColumnContainer>
            </Upload>
        </MainContainer>
    );
};
