import { useNavigate } from 'react-router';
import { Col, Grid } from '../components/grid';
import LoginForm from '../components/forms/login-form';

function AuthenticationPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <Grid>
      <Col></Col>
      <Col>
        <LoginForm onSubmitForm={handleLogin} />
      </Col>
    </Grid>
  );
}

export default AuthenticationPage;
