import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  max-width: 1560px;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 5px 10px 25px 1px rgba(170, 170, 170, 0.4);
  height: 800px;

  img {
    height: 100%;
    margin-left: -100px;
  }

  @media (max-width: 1392px) {
    height: 600px;
    img {
      margin-left: -30px;
    }
  }

  @media (max-width: 1198px) {
    height: 500px;
    img {
      margin-left: -20px;
    }
  }
`;
