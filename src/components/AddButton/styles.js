import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TINS_TOMATO_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  margin-top: 1.6rem;

  width: 9.2rem;
  height: 4.8rem;

  border-radius: 0.5rem;
  padding: 1.2rem 2.4rem;
`;
