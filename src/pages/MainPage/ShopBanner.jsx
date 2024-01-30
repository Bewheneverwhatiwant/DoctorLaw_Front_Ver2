import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
margin-top: 100px;
`;

const Detail = styled.a`
font-size: 28px;
line-height: 40px;
text-align: left;
color: white;
`;

const Three = styled.div`
width: auto;
background-color: #1774D0;
color: white;
font-size: 28px;
padding: 10px;
border: none;
border-radius: 10px;
margin-bottom: 10px;
display: inline-flex;
align-items: center;
justify-content: center;
`;

const Back = styled.div`
width: 100%;
height: 600px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #18181C;
`;

const CustomRow = styled.div`
display: flex;
flex-direction: row;
gap: 60px;
align-items: center;
`;

const CustomColumn = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: flex-start;
`;

const Sizedbox = styled.div`
width: 30px;
height: 30px;
`;

const ShopContainer = styled.div`
border: none;
border-radius: 20px;
background-image: linear-gradient(to right, #E797B8, #8B5EFF, #1774D0);
display: flex;
flex-direction: row;
gap: 20px;
padding: 20px;
margin-top: 40px;
`;

const ShopDetail = styled.a`
color: white;
font-size: 20px;
text-align: left;
margin-bottom: 20px;
`;

const ShopTitle = styled.h1`
color: white;
font-weight: bold;
font-size: 48px;
text-align: left;
`;

const ShopButton = styled.button`
background-color: black;
color: white;
padding: 10px;
border-radius: 10px;
border: none;
font-size: 14px;
`;

export default function Component() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/mileageshop');
    };

    return (
        <MainContainer>
            <Back>
                <Title>회원을 먼저 생각합니다</Title>
                <Sizedbox />
                <CustomRow>
                    <CustomColumn>
                        <Three>접근성</Three>
                        <Three>합리적인 가격</Three>
                        <Three>원하는 결과</Three>
                    </CustomColumn>
                    <Detail>
                        소비자 입장에서 생각하며 중시한 세 가지 키워드.<br />
                        이것이 의미하는 바를 여러분께 결과로 입증드립니다.
                    </Detail>
                </CustomRow>

                <ShopContainer>
                    <CustomColumn>
                        <ShopDetail>
                            매번 지불되는 비용, 아까우신가요?
                        </ShopDetail>
                        <ShopTitle>
                            마일리지 구매로<br />더 값싸게 이용해보세요!
                        </ShopTitle>
                        <Sizedbox />
                        <ShopButton onClick={handleNavigate}>마일리지 샵 바로가기</ShopButton>
                    </CustomColumn>
                    <StyledImg src={'img/img_shop.png'} width='450px' height='350px' />
                </ShopContainer>
            </Back>
        </MainContainer>
    );
};
