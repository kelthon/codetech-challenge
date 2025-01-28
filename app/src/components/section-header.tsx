import styled from 'styled-components';
import { Button } from './button';

interface SectionHeaderProps {
  sectionTitle: string;
  buttonTitle: string;
  onClickButton?: React.MouseEventHandler<HTMLButtonElement>;
}

const Header = styled.h2`
  display: flex;
  align-items: center;
  margin-block: 2rem;
`;

const HeaderTitle = styled.span`
  flex: 1;
  font-weight: 800;
  font-size: 1.5rem;
`;

function SectionHeader({ sectionTitle, buttonTitle, onClickButton }: SectionHeaderProps) {
  return (
    <Header>
      <HeaderTitle>{sectionTitle}</HeaderTitle>
      <Button type='button' onClick={onClickButton}>{buttonTitle}</Button>
    </Header>
  );
}

export default SectionHeader;
