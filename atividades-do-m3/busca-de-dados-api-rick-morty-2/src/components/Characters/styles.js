import styled from "styled-components";

export const Lista = styled.ul`
  margin-top: 1.5rem;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  div {
    margin: 10px;
  }

  .vivo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 300px;
    border-radius: 10%;
    padding: 10px;
    background-color: var(--color-success);
  }

  .morto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 300px;
    border-radius: 10%;
    padding: 10px;
    background-color: var(--color-error);
  }

  h3 {
    margin: 0 auto;
    max-width: 14ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  img {
    margin: 0 auto;
    width: 80%;
    height: 80%;
  }
`;

export const Button = styled.button``;
