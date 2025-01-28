import styled from 'styled-components';

const Aside = styled.aside`
  display: flex;
  min-width: 19.5rem;
  flex-direction: column;
  padding-block-start: 5.625rem;
  color: var(--theme-foreground-primary);
  background-color: var(--theme-background-primary);
`;

const AsideSection = styled.section`
  flex: 1;
  gap: 3rem;
  display: flex;
  flex-direction: column;
`;

const AsideBrand = styled.hgroup`
  text-align: center;
`;

const AsideBrandTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 3.375rem;
  text-transform: uppercase;
`;

const AsideNav = styled.ul`
  list-style: none;
`;

const AsideNavItem = styled.li`
  padding: 0.90625rem 3.5rem;
  background-color: var(--theme-background-highlight);
`;
const AsideFooter = styled.footer`
  font-size: 14px;
  text-align: center;
  padding-block: 2.5rem;
`;

function AsideMenu() {
  return (
    <Aside>
      <AsideSection>
        <AsideBrand>
          <AsideBrandTitle>Codetech</AsideBrandTitle>
          <p>desenvolvimento de sistemas</p>
        </AsideBrand>
        <nav>
          <AsideNav>
            <AsideNavItem>Alunos</AsideNavItem>
          </AsideNav>
        </nav>
      </AsideSection>
      <AsideFooter>
        desenvolvido por <strong>Kelthon</strong>, Codetech
      </AsideFooter>
    </Aside>
  );
}

export default AsideMenu;
