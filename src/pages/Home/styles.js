import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  .Banner {
    width: 80%;
    position: relative;
    margin-bottom: 6.2rem;

    > img {
      position: absolute;
      top: 1.5rem;
      left: -5rem;

      z-index: 10;
    }

    .Banner-background {
      width: 100%;
      height: 26rem;
      margin-top: 16.4rem;

      position: relative;

      background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

      border: 1px solid #000000;
      border-radius: 0.8rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      > div {
        position: absolute;
        top: 8.7rem;
        left: 59.7rem;

        > h2 {
          font-size: 4rem;
          line-height: 5.6rem;
          font-weight: 500;
        }

        > span {
          font-size: 1.6rem;
          line-height: 2.2rem;
          font-weight: 400;
        }
      }
    }
  }

  .CardWrapper {
    display: flex;
    gap: 2.7rem;
    max-width: 136.8rem;
  }

  @media (max-width: 1200px) {
    .Banner {
      margin-bottom: 5.2rem;

      > img {
        height: 30rem;
        width: 40rem;
        top: 12rem;
        left: 0;

        z-index: 10;
      }

      .Banner-background {
        width: 100%;
        height: 26rem;
        margin-top: 16.4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        position: relative;

        background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

        border: 1px solid #000000;
        border-radius: 0.8rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        > div {
          position: static;
          align-self: end;
          justify-self: flex-end;
          > h2 {
            font-size: 4rem;
            line-height: 5.6rem;
            font-weight: 500;
          }

          > span {
            font-size: 1.6rem;
            line-height: 2.2rem;
            font-weight: 400;
          }
        }
      }
    }
  }
`;
