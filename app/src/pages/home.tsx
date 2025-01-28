import { RiDeleteBin7Line } from '@remixicon/react';
import NavBar from '../components/navbar';
import Table, { TableHead, TableRow } from '../components/table';
import SectionHeader from '../components/section-header';
import IconButton from '../components/button';
import { useNavigate } from 'react-router';
import { Wrapper } from '../components/container';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigateToRegister = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    navigate('/register');
  };
  return (
    <>
      <NavBar>
        <h1>Codetech</h1>
      </NavBar>
      <Wrapper>
        <SectionHeader
          sectionTitle="Alunos"
          buttonTitle="Criar Registro"
          onClickButton={handleNavigateToRegister}
        />

        <Table>
          <TableHead>nome</TableHead>
          <TableHead>idade</TableHead>
          <TableHead>turma</TableHead>
          <TableHead>delete</TableHead>
          <TableRow>Gabriel</TableRow>
          <TableRow>18</TableRow>
          <TableRow>3B</TableRow>
          <TableRow>
            <IconButton>
              <RiDeleteBin7Line />
            </IconButton>
          </TableRow>
        </Table>
      </Wrapper>
    </>
  );
}

export default HomePage;
