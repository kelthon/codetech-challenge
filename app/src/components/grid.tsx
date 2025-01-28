import styled from 'styled-components';
import Container from './container';

export const Grid = styled(Container)`
  display: flex;
`;

export const Col = styled.div`
  flex: 1;
  display: flex;

  &:first-child {
    background-color: var(--theme-background-primary);
  }
`;
