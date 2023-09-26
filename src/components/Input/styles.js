import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > label {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    height: 4.8rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border-radius: 0.5rem;
  }
`;
