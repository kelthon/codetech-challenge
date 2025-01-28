import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  font-weight: 800;
  align-items: center;
  max-height: 4.375rem;
  padding-inline: 3.125rem;
  text-transform: uppercase;
  padding-block: 1.203125rem;
  color: var(--theme-foreground-primary);
  background-color: var(--theme-background-primary);
`;

export const FakeNavBar = styled.div`
  min-height: 4.375rem;
  border-block-end: 1px solid var(--theme-background-muted);
`;

export default NavBar;
