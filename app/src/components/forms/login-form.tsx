import { FormProps } from './create-student-form';
import Footer from '../footer';
import styled from 'styled-components';
import { Button } from '../button';

const Area = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
`;

const LoginFormGroup = styled.p`
  display: flex;
  justify-content: center;
`;

const LoginLabel = styled.label`
  flex: 1;
  display: flex;
  padding-inline: 4rem;
  flex-direction: column;
`;

const LoginInput = styled.input`
  border: none;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 0.5rem;
  line-height: 1.3125rem;
  padding-inline: 0.5rem;
  padding-block: 0.90625rem;
  background-color: var(--theme-background-muted);
`;

function LoginForm({ onSubmitForm }: FormProps) {
  return (
    <Area>
      <FormSection>
        <h1>Login</h1>
        <p>entre com seu email e senha</p>
        <LoginFormComponent method="post" onSubmit={onSubmitForm}>
          <LoginFormGroup>
            <LoginLabel>
              email
              <LoginInput type="email" required />
            </LoginLabel>
          </LoginFormGroup>
          <LoginFormGroup>
            <LoginLabel>
              senha
              <LoginInput type="password" required />
            </LoginLabel>
          </LoginFormGroup>
          <LoginFormGroup>
            <LoginLabel>
              <Button type="submit">Entrar</Button>
            </LoginLabel>
          </LoginFormGroup>
        </LoginFormComponent>
      </FormSection>
      <Footer />
    </Area>
  );
}

export default LoginForm;
