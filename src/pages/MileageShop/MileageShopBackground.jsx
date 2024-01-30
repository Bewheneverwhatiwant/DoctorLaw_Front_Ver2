import styled from 'styled-components';
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const BodyContainer = styled.div`
    position: relative;
   
`

const ChildrenContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
   
`

const BeigeContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #000000;
    min-height: 100vh;
`;

const StyledFooter = styled(Footer)`
    position: relative;
    bottom: 0;
`

export default function Component({ $imgSrc, children }) {
    return (
        <BodyContainer>
            <BeigeContainer>
                <ChildrenContainer>
                    {children}

                </ChildrenContainer>
                <StyledFooter />
            </BeigeContainer>
        </BodyContainer>
    )
}
