import styled from 'styled-components';

const BaseFooter = styled.footer`
  font-size: 14px;
  text-align: center;
  padding-block: 2.5rem;
`;

function Footer() {
  return (
    <BaseFooter>
      desenvolvido por <strong>Kelthon</strong>, Codetech
    </BaseFooter>
  );
}

export default Footer;
