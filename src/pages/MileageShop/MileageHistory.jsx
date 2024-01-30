import styled from 'styled-components';
import StyledImg from '../../Components/Container/CustomImg';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const Title = styled.h1`
color: white;
font-size: 24px;
text-align: left;
`;

const History = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
border-top: 1px solid #313131;
border-bottom: 1px solid #313131;
padding: 20px;
`;

const CustomColumn = styled.div`
display: flex;
flex-direction: column;
`;

const HistoryTitle = styled.a`
color: white;
font-size: 20px;
text-align: left;
`;

const HistoryDetail = styled.a`
font-size: 16px;
color: #AEAEAE;
text-align: left;
`;

const MinusPoint = styled.a`
color: #FF5252;
font-size: 24px;
text-align: right;
`;

const Use = styled.a`
color: white;
font-size: 16px;
text-align: right;
`;

const After = styled.a`
font-size: 16px;
color: #AEAEAE;
text-align: right;
`;

const Sizedbox = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || '50px'};
`;


export default function Component() {

    const historyData = [
        { title: '1회 이용권 구매', date: '24. 01. 07 18:15', points: '- 1,000 P', use: '사용', remaining: '잔여 14,000 P' },
        { title: '5회 이용권 구매', date: '24. 01. 07 18:15', points: '- 4,000 P', use: '사용', remaining: '잔여 15,000 P' },
        { title: '10,000 마일리지 충전', date: '24. 01. 07 18:15', points: '+ 10,000 P', use: '충전', remaining: '잔여 23,000 P' },
        { title: '1개월 구독권 구매', date: '24. 01. 07 18:15', points: '- 4,000 P', use: '사용', remaining: '잔여 15,000 P' },
        { title: '5,000 마일리지 충전', date: '24. 01. 07 18:15', points: '+ 10,000 P', use: '충전', remaining: '잔여 23,000 P' },
    ];


    return (
        <MainContainer>
            {historyData.map((item, index) => (
                <History key={index}>
                    <CustomColumn>
                        <HistoryTitle>{item.title}</HistoryTitle>
                        <Sizedbox height='20px' />
                        <HistoryDetail>{item.date}</HistoryDetail>
                    </CustomColumn>
                    <CustomColumn>
                        <MinusPoint>{item.points}</MinusPoint>
                        <Sizedbox height='20px' />
                        <Use>{item.use}</Use>
                        <Sizedbox height='20px' />
                        <After>{item.remaining}</After>
                    </CustomColumn>
                </History>
            ))}
        </MainContainer>
    );
};
