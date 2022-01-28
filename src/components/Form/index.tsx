import { Container } from './style';

export default function From() {
  return (
    <Container>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">
          <input
            autoComplete="off"
            type="text"
            name="username"
            placeholder=" "
          />
          <span>Username</span>
        </label>

        <label htmlFor="email">
          <input autoComplete="off" type="text" name="email" placeholder=" " />
          <span>Email</span>
        </label>

        <label htmlFor="confirm-email">
          <input
            autoComplete="off"
            type="text"
            name="confirm-email"
            placeholder=" "
          />
          <span>Confirm-Email</span>
        </label>

        <label htmlFor="password">
          <input
            autoComplete="off"
            type="password"
            name="password"
            placeholder=" "
          />
          <span>Password</span>
        </label>

        <label htmlFor="confirm-password">
          <input
            autoComplete="off"
            type="password"
            name="confirm-password"
            placeholder=" "
          />
          <span>Confirm Password</span>
        </label>

        <button>Register</button>
      </form>
    </Container>
  );
}
