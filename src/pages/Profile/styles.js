import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  margin: 8rem auto;
  width: 80%;
  max-width: 90rem;
  justify-content: center;
  display: flex;
  gap: 2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.1);

  .profile-card {
    width: 33%;
    box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.1);
    background-color: ${({ theme }) => theme.COLORS.DARK_400_PAYMENTBUTTON};
  }

  @media (max-width: 768px) {
    width: 70rem;

    .profile-card {
      width: 40%;
    }
  }

  @media (max-width: 425px) {
    width: 40rem;

    .profile-card {
      width: 60%;
    }
  }
`;

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  max-width: 80rem;
  margin: 6rem auto;

  button {
    margin-top: 2rem;
  }

  > div {
    border: 2px solid transparent;

    &:focus-within {
      border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > div:nth-child(4) {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    height: 90%;
    margin: 2rem auto;
  }
`;
