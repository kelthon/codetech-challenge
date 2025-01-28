import AsideMenu from '../components/aside';
import SectionHeader from '../components/section-header';
import RegisterForm from '../components/forms/create-student-form';
import { useNavigate } from 'react-router';
import Container, { VContainer, Wrapper } from '../components/container';
import { FakeNavBar } from '../components/navbar';

function RegisterPage() {
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    navigate('/');
  };

  return (
    <Container>
      <AsideMenu />
      <VContainer>
        <FakeNavBar />
        <Wrapper>
          <SectionHeader
            sectionTitle="Alunos"
            buttonTitle="Voltar"
            onClickButton={handleClick}
          />
          <RegisterForm />
        </Wrapper>
      </VContainer>
    </Container>
  );
}

export default RegisterPage;
