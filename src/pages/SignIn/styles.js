import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
        font-size: 3.6rem;
      }
      > svg {
        width: 6rem;
        height: 6rem;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    > div {
      > h1 {
        font-size: 3.2;
        line-height: 4rem;
      }
      > svg {
        width: 5.2rem;
        height: 5.2rem;
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
  min-width: 32rem;
  min-height: 54rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;

  padding: 3.2rem;
  gap: 3.2rem;

  border-radius: 1.6rem;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  #form-title {
    display: none;
  }

  @media (min-width: 500px) {
    min-width: 42rem;
    padding: 4.8rem;
    margin: 0 1rem;
  }

  @media (min-width: 768px) {
    min-width: 47.6rem;
    margin: 0;
    padding: 6.4rem;
    box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.1);
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > h2 {
      font-size: 3.2rem;
      line-height: 2.4rem;
    }

    #form-title {
      display: block;
    }
  }
`;
