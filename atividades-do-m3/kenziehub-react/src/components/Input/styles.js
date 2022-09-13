import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;

  svg {
    color: var(--negative);
    position: absolute;
    width: 20px;
    height: 20px;
    top: 8px;
    right: 5px;
  }

  svg:hover + span {
    opacity: 1;
  }

  .eye {
    color: var(--grey-1);
    position: absolute;
    width: 20px;
    height: 20px;
    top: 8px;
    right: 30px;
    cursor: pointer;
  }
`;
export const Error = styled.div`
  position: relative;

  span {
    font-size: 0.8rem;
    background-color: var(--negative);
    opacity: 0;
    position: absolute;
    padding: 10px;
    top: 35px;
    left: -90px;
    border-radius: 0.3rem;
    transition: 0.2s;
    z-index: 2;

    ::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
      border-color: var(--negative) transparent;
      position: absolute;
      top: -7px;
      right: 8px;
    }
  }
`;
