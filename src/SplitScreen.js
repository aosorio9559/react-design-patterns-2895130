import styled from "styled-components";


const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${({ weight }) => weight}
`;

export const SplitScreen = ({
  children,
  leftWeight = 1,
  rigtWeight = 1,
}) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rigtWeight}>
        {right}
      </Pane>
    </Container>
  );
};