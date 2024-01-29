import styled from 'styled-components';
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const BodyContainer = styled.div`
    position: relative;
    min-height: 100vh;
`

const ChildrenContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 3px);
`

const BeigeContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 500px;
    background-color: beige;
`;

export default function Component({ $imgSrc, children }) {
    return (
        <BodyContainer>
            <BeigeContainer />
            <ChildrenContainer>
                {children}

            </ChildrenContainer>
        </BodyContainer>
    )
}
