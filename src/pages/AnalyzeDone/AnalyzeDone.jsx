import styled from 'styled-components';
import UpperContainer from './UpperContainer';
import MidBox from './MidBox';
import BottomBox from './BottomBox';


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`

export default function Component() {
    return (
        <MainContainer>  
            <UpperContainer />
            <MidBox />
            <BottomBox />
        </MainContainer>
    );
};