import styled from 'styled-components';
import ContainerRow from '../../Components/Container/ContainerRow';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const Title = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 64px;
    position: relative;
    z-index: 1;
    margin-top: 200px;
`;

const Circle = styled.div`
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle at center, #222228, #000000, #000000);
    border-radius: 50%;
    z-index: 0;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.5);
`;

const Detail = styled.a`
color: #9E9E9E;
font-size: 18px;
margin-top: 100px;
margin-bottom: 100px;
z-index: 1;
text-align: center;
line-height: 26px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-image: linear-gradient(to right, #E797B8, #8B5EFF, #1774D0);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease; /* 배경 색상 변경 시 애니메이션 효과 */
  z-index: 1;
  margin: 20px;
  
  &:hover {
    background-image: linear-gradient(to left, #E797B8, #8B5EFF, #1774D0); /* 마우스 오버 시 배경 그라데이션 방향 변경 */
  }
`;



export default function Component() {
    return (
        <MainContainer>
            <Title>계약서 고민을 해결해드립니다</Title>
            <Circle />
            <Detail>치별화된 인공지능 서비스로<br />더 빠르고 효율적이게, 그러나 합리적인 가격으로.</Detail>
            <ContainerRow>
                <Button>계약서 분석 바로가기</Button>
                <Button>계약서 생성 바로가기</Button>
            </ContainerRow>
        </MainContainer>
    );
};
