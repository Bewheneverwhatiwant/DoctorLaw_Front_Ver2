import { styled } from 'styled-components';
import ContainerRow from '../Container/ContainerRow';
import CustomImg from '../Container/CustomImg';

const HeaderContainer = styled.header`
    width: 100%;
    position: relative;
    background-color: ${props => props.$background == true ? 'black' : 'white'}; /* props로 넘어온 배경색을 설정하거나 기본값으로 흰색 사용 */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #9E9E9E;
    font-size: 15px;
`;

const StyledText = styled.a`
    color: #9E9E9E;
    font-size: 15px;
`

const LogoText = styled.h1`
color: ${props => props.$color == true ? 'white' : 'black'};
font-size: 20px;
font-weight: bold;
`

const Sizedbox = styled.div`
    width: 20px;
`

export default function Component({ $background }) {
    return (
        <HeaderContainer $background={$background}>
            <ContainerRow>
                <CustomImg src={'img/logo.png'} width='30px' height='30px' marginTop='10px' marginBottom='10px' marginLeft='10px' />
                <LogoText>닥터로우</LogoText>
            </ContainerRow>
            <ContainerRow>
                <StyledLink href="/signup">회원가입</StyledLink>
                <StyledText>/</StyledText>
                <StyledLink href="/signup">로그인</StyledLink>
                <Sizedbox />
                <StyledLink href="/signup">계약서 생성</StyledLink>
                <Sizedbox />
                <StyledLink href="/signup">계약서 분석</StyledLink>
                <Sizedbox />
            </ContainerRow>
        </HeaderContainer>
    )
};
