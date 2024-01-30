import styled from 'styled-components';
import StyledImg from '../../Components/Container/CustomImg';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const Two = styled.div`
display: flex;
flex-direction: row;
align-items: space-between;
width: 80%;
gap: 30px;
`;

const Sizedbox = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || '50px'};
`;

const Container = styled.div`
border: 1px solid #AEAEAE;
border-radius: 20px;
display: flex;
flex: 1;
flex-direction: column;
padding: 20px;
`;

const Title = styled.h1`
color: white;
font-size: 24px;
font-weight: bold;
text-align: left;
`;

const Detail = styled.a`
color: #AEAEAE;
font-size: 12px;
font-weight: bold;
text-align: left;
`;

const Right = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;
`;

const Button = styled.button`
  font-size: 24px;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.color || '#122033'}; // 기본 색상은 '#122033'
  color: white;
  font-weight: bold;
  padding: 15px;
`;

export default function Component() {


    return (
        <MainContainer>
            <Two>
                <Container>
                    <Title>마일리지 충전하기</Title>
                    <Sizedbox height='15px' />
                    <Detail>마일리지 충전 버튼을 눌러 새 페이지에서 마일리지 충전을 진행하세요.</Detail>
                    <Sizedbox height='40px' />
                    <Right>
                        <Button>마일리지 충전</Button>
                    </Right>
                </Container>

                <Container>
                    <Title>마일리지 사용하기</Title>
                    <Sizedbox height='15px' />
                    <Detail>마일리지 사용 버튼을 눌러 새 페이지에서 마일리지 사용을 진행하세요.</Detail>
                    <Sizedbox height='40px' />
                    <Right>
                        <Button color='#FF7B3F'>마일리지 사용</Button>
                    </Right>
                </Container>
            </Two>
        </MainContainer>
    );
};
