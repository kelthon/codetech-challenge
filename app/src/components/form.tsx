import styled from 'styled-components';
import { Button } from './button';

export const Input = styled.input`
  border: none;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 0.5rem;
  line-height: 1.3125rem;
  padding-inline: 0.5rem;
  padding-block: 0.90625rem;
  background-color: var(--theme-background-muted);
`;

export const InputLabel = styled.label`
  display: flex;
  font-weight: 300;
  max-width: 34.1875rem;
  flex-direction: column;

  &:first-child {
    flex: 1;
  }
`;

export const InputGroup = styled.div`
  gap: 2rem;
  display: flex;
  min-height: 3.125rem;
`;

export const Form = styled.form`
  flex: 1;
  gap: 2rem;
  display: flex;
  margin-block-end: 5rem;
  padding: 3rem 2.5rem;
  flex-direction: column;
  border-radius: 0%.5rem;
  border: 1px solid var(--theme-background-muted);
`;

function FormInput() {
  return (
    <>
      <Form action="post">
        <InputGroup>
          <InputLabel>
            nome completo
            <Input />
          </InputLabel>
          <InputLabel>
            idade
            <Input type="number" min={5} max={105} />
          </InputLabel>
        </InputGroup>
        <InputGroup>
          <InputLabel>
            turma
            <Input />
          </InputLabel>
        </InputGroup>
        <InputGroup>
          <Button type="submit">Salvar</Button>
        </InputGroup>
      </Form>
    </>
  );
}

export default FormInput;
