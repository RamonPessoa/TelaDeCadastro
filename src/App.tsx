import Register from './components/Register';
import GlobalStyle from './styles/global';
import { Container } from './styles/style';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Register />
      </Container>
    </>
  );
}
