import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 70px;
  color: #555;
  max-width: 500px;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: 2rem;
    width: 90%;

    label {
      position: relative;
      display: flex;
      flex-direction: column;

      span {
        position: absolute;
        left: 5px;
        top: 5px;
        transition: 0.2s;
        pointer-events: none;
      }
    }

    input {
      font-size: 2rem;
      border: none;
      padding: 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      :focus-visible {
        outline: none;
      }
      :focus ~ span {
        transform: translate(-5px, -25px);
      }

      :not(:placeholder-shown) ~ span {
        transform: translate(-5px, -25px);
      }
    }

    button {
      background: #00af00;
      border: none;
      padding: 20px;
      border-radius: 10px;
      color: white;
      font-weight: 900;
    }
  }
  @media (max-width: 1198px) {
    gap: 40px;
    form {
      font-size: 1.4rem;
      gap: 20px;
      input {
        font-size: 1.6rem;
      }
    }
  }
`;
