import { styled } from 'styled-components';
import ContainerRow from '../Container/ContainerRow';
import CustomImg from '../Container/CustomImg';

const HeaderContainer = styled.header`
    width: 100%;
    position: relative;
    background-color: ${props => props.$background == true ? 'black' : 'white'}; /* props로 넘어온 배경색을 설정하거나 기본값으로 흰색 사용 */
    border-bottom: 2px solid #D9D9D9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #D9D9D9;
    font-size: 15px;
    font-weight: bold;
`;

const StyledText = styled.a`
    color: #D9D9D9;
    font-size: 15px;
    font-weight: bold;
`

const Sizedbox = styled.div`
    width: 10px;
`

export default function Component({ $background }) {
    return (
        <HeaderContainer $background={$background}>
            <CustomImg src={'img/logo.png'} width='30px' height='30px' marginTop='10px' marginBottom='10px' marginLeft='10px' />

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
