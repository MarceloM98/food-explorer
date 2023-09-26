import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 2.4rem 12.3rem;
`;

export const ButtonBack = styled.div`
  margin: 1.8rem 0;
  max-width: 136.8rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > a {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    display: flex;
    align-items: center;

    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.6rem;
  }

  > h2 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.48rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 136.8rem;

  label {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .uploadImage {
    #file {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      display: flex;
      flex-direction: column;

      gap: 0.8rem;

      .uploadImageSelect {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 3rem;
        border-radius: 0.5rem;
        height: 4.8rem;
        width: 30rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    input[type="file"] {
      display: none;
    }
  }
  .deleteButton {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-bottom: 3.2rem;
`;

export const TextArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  margin-bottom: 4.8rem;
  > label {
    margin-top: 3.2rem;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > textarea {
    height: 17.2rem;
    width: 100%;
    padding: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border-radius: 0.5rem;
    border: 1px solid white;
    resize: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`;

export const SectionIngredients = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid white;
  padding: 1rem;
`;

export const SendFormWithImage = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  > button {
    width: 40%;
  }
`;
