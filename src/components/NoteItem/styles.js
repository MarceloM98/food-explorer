import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.5rem;
  padding: 0.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.LIGHT_400}` : "none"};

  /* margin-bottom: 0.8rem; */
  border-radius: 1rem;
  padding-right: 1rem;

  > Button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.TINS_TOMATO_300};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.TINS_MINT_100};
  }

  > input {
    height: 3rem;
    max-width: 13rem;
    padding: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    background: transparent;
  }
`;
