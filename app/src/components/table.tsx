import styled from 'styled-components';

export const TableRow = styled.div`
  padding: 1rem 5.5rem;
  text-align: center;

  &:is(:nth-child(1), :nth-child(4)) {
    border-radius: 0.5rem;
  }

  &:nth-child(4n + 1) {
    text-align: left;
  }
`;

export const TableHead = styled(TableRow)`
  background-color: var(--theme-background-muted);
`;

const Table = styled.div`
  display: grid;
  padding-block: 2rem;
  align-items: center;
  grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr;
`;

export default Table;
