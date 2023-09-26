import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  animation: fadeIn 1.8s;

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    > h1 {
      font-size: 2.8rem;
      line-height: 4rem;
    }
    > svg {
      width: 4.8rem;
      height: 4.8rem;
    }
  }

  @media (min-width: 810px) {
    > div {
      > h1 {
        font-size: 4.2rem;
        line-height: 5rem;
      }

      > svg {
        width: 7rem;
        height: 7rem;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;

    > div {
      > h1 {
        font-size: 3.6rem;
      }
      > svg {
        width: 6rem;
        height: 6rem;
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Form = styled.form`
  min-width: 47.6rem;
  min-height: 54rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 6.4rem;
  gap: 3.2rem;

  border-radius: 1.6rem;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  min-width: 30rem;
  padding: 3.2rem;
  margin: 0 2rem;

  #form-title {
    display: none;
  }

  @media (min-width: 500px) {
    min-width: 34rem;
    padding: 3.2rem;
    margin: 0 1rem;
  }
  
  @media (min-width: 768px) {
    min-width: 42rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.1);
    padding: 4.8rem;
    margin: 0 1rem;

    > h2 {
      font-size: 3.2rem;
      font-weight: 500;
      text-align: center;
      line-height: 2rem;
    }
    #form-title {
      display: block;
    }
  }


`;
