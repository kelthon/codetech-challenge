import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  height: 100vh;
`;

export const VContainer = styled(Container)`
  flex-direction: column;
`;

export const Wrapper = styled(VContainer)`
  padding-inline: 4rem;
`;

export default Container;
