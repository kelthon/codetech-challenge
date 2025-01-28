import styled from 'styled-components';

export const Button = styled.button`
  gap: 0.5rem;
  border: none;
  display: flex;
  font-weight: 800;
  height: 3.125rem;
  align-items: center;
  font-size: 0.875rem;
  min-width: 10.875rem;
  border-radius: 0.5rem;
  justify-content: center;
  color: var(--theme-foreground-primary);
  background-color: var(--theme-background-primary);

  &:hover {
    background-color: var(--theme-background-highlight);
  }
`;

export const RIButton = styled(Button)`
  color: var(--theme-foreground);
  background-color: transparent;

  &:hover {
    color: var(--theme-background-highlight);
    background-color: transparent;
  }
`;

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
  onClick?: () => React.MouseEventHandler<HTMLButtonElement>;
}

function IconButton({ type, children, onClick }: ButtonProps) {
  return <RIButton type={type} onClick={onClick}>{children}</RIButton>;
}

export default IconButton;
