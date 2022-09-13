import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;

  min-width: 18.75rem;
  width: 100%;
  max-width: 90%;

  margin: 1.25rem 0;
  
  @media screen and (min-width: 768px) {
      max-width: 55%;
  }

  h2 {
    color: var(--grey-0);
  }

  button {
    color: var(--grey-0);
    background-color: var(--grey-3);
    border: none;
    border-radius: 0.2005rem;

    width: 2rem;
    height: 2rem;

    font-size: 25px;
    text-align: center;

    cursor: pointer;
  }

  svg {
    width: .8rem;
  }

  button:hover {
    background-color: var(--grey-2);
  }
`;

export default StyledDiv;
