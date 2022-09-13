import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;

  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);

  div {
    min-width: 18.75rem;
    width: 100%;
    max-width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 2.1rem 0.7rem;
  }

  @media screen and (min-width: 768px) {
    div {
      max-width: 55%;
    }
  }

  h3 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 18px;

    margin-bottom: 1rem;
  }

  p {
    color: var(--grey-1);
    font-weight: 400;
    font-size: 12px;
  }
`;

export default HeaderContainer;
