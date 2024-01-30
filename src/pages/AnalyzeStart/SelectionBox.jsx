import styled from 'styled-components';
import StyledImg from "../../Components/Container/CustomImg";

const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
`
const SelectionText = styled.div`
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

const SelectionColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const SelectionRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 120px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
`

const TicketsColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const Ticket = styled.div`
    display: flex;
    width: 558px;
    height: 70px;
    padding: 0px 15px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    border: 3px solid #122033;
`

const MileageShop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 667px;
    height: 250px;
    flex-shrink: 0;
    border-radius: 20px;
    background: linear-gradient(93deg, #E797B8 0.48%, #8B5EFF 50.74%, #1774D0 100%);
`

const MileageText1 = styled.a`
    color: #FFF;
    text-align: left;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 177.778% */
    margin-left: 30px;
    margin-top: 20px;;
`
const MileageText2 = styled.a`
    width: 499px;
    color: #FFF;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 65px; /* 135.417% */
    margin-left: 30px;
`

const MileageButton = styled.a`
    border-radius: 5px;
    background: #000;
    width : 178px;
    height : 20px;
    display: inline-flex;
    padding: 12px 28px;
    margin-left: 400px;
    margin-top: 10px;
    align-items: center;
    color: #FFF;
    font-family: Poppins;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
    justify-content: center;
`

const TicketTextColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const TicketText1 = styled.a`
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const TicketText2 = styled.a`
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const TicketButton = styled.a`
    width: 154px;
    height: 37px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FB969C;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex; /* 수직 중앙 정렬을 위해 부모를 flex container로 설정 */
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center;
    margin-left: 180px;
`

const TicketButtonBlue = styled.a`
    width: 154px;
    height: 37px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #122033;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex; /* 수직 중앙 정렬을 위해 부모를 flex container로 설정 */
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center;
    margin-left: auto;
`

const TicketQuantityRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
`

const TicketNumber = styled.a`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 0px; /* 0% */
    margin-top: 14px;
`

const TicketPrice = styled.a`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 0px; /* 0% */
    margin-top: 14px;
    margin-right: 180px;
`

const TicketLast = styled.div`
    display: flex;
    width: 558px;
    height: 70px;
    padding: 0px 15px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    border: 3px solid #122033;
    margin-top: 10px;
`

export default function Component () {
    return(
        <MainContainer>
            <SelectionColumn>
                <SelectionText>Step 2 : 이용권 선택</SelectionText>
                <SelectionRow>
                    <TicketsColumn>
                        <Ticket>
                            <TicketTextColumn>
                                <TicketText1>닥터로우AI</TicketText1>
                                <TicketText2>1회 이용권</TicketText2>
                            </TicketTextColumn>
                            <TicketQuantityRow>
                                <StyledImg src={'img/이용권아이콘.svg'} width='26px' height='26px' />
                                <TicketNumber>x 5 개 남음</TicketNumber>
                            </TicketQuantityRow>
                            <TicketButton>사용하기</TicketButton>
                        </Ticket>
                        <Ticket>
                            <TicketTextColumn>
                                <TicketText1>닥터로우AI</TicketText1>
                                <TicketText2>구독권</TicketText2>
                            </TicketTextColumn>
                            <TicketQuantityRow>
                                <StyledImg src={'img/이용권아이콘.svg'} width='26px' height='26px' />
                                <TicketNumber>x 5 개 남음</TicketNumber>
                            </TicketQuantityRow>
                            <TicketButton>사용하기</TicketButton>
                        </Ticket>
                        <TicketLast>
                            <TicketTextColumn>
                                <TicketText1>닥터로우AI</TicketText1>
                                <TicketText2>즉시 이용권</TicketText2>
                            </TicketTextColumn>
                            <TicketQuantityRow>
                                <TicketPrice>1200원</TicketPrice>
                            </TicketQuantityRow>
                            <TicketButtonBlue>구매하기</TicketButtonBlue>
                        </TicketLast>
                    </TicketsColumn>
                    <MileageShop>
                        <MileageText1>매번 지불되는 비용 아까우신가요?</MileageText1>
                        <MileageText2>마일리지 구매로<br/> 더 값싸게 이용해보세요!</MileageText2>
                        <MileageButton>마일리지 샵 바로가기</MileageButton>
                    </MileageShop>
                </SelectionRow>
            </SelectionColumn>
        </MainContainer>
    )

};