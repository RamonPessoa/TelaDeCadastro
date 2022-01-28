import Form from '../Form';
import { Container } from './style';
import RegisterImage from '../../assets/images/register-image.jpg';

export default function Register() {
  return (
    <Container>
      <img src={RegisterImage} />
      <Form />
    </Container>
  );
}
