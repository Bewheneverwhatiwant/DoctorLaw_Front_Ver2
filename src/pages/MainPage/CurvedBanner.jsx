import styled from 'styled-components';
import ContainerRow from '../../Components/Container/ContainerRow';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const CurvedContainer = styled.div`
  width: 100%;
  height: 450px;
  background-image: linear-gradient(to right, #E797B8, #8B5EFF, #1774D0);
  position: relative;
  z-index: 0;
`;

const Curved = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  clip-path: ellipse(50% 100% at 50% 0%);
  position: absolute;
  z-index: 1;
`;

const Curved_2 = styled.div`
  width: 100%;
  top: 350px;
  height: 100px;
  background-color: black;
  clip-path: ellipse(50% 100% at 50% 100%);
  position: absolute;
  z-index: 1;
`;

export default function Component() {
    return (
        <MainContainer>

            <CurvedContainer>
                <Curved />
                <Curved_2 />
            </CurvedContainer>

        </MainContainer>
    );
};
