import styled from "styled-components";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    min-width: 18.75rem;
    width: 100%;
    max-width: 23.0625rem;
    margin: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    height: 2.5rem;
    padding: 0px 16.2426px;
    color: var(--grey-0);
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    border-radius: 4px;
    transition: 0.2s;
  }

  button:hover {
    background-color: var(--grey-2);
  }

  button:active {
    transform: scale(0.98);
  }
`;

export default NavContainer;
