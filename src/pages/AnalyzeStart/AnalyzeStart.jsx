import styled from 'styled-components';
import FileUpload from './FileUpload';
import AgreeBox from './AgreeBox';
import SelectionBox from './SelectionBox';

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
            <FileUpload />
            <SelectionBox />
            <AgreeBox />
        </MainContainer>
    );
};
