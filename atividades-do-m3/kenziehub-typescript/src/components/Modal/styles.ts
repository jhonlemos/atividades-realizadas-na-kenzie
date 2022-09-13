import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  .modal__box {
    min-width: 18.75rem;
    width: 100%;
    max-width: 23.0625rem;

    position: relative;
    border-radius: 0.25rem;
    overflow: hidden;

    opacity: 1;
    animation: showUp 0.3s;
  }

  @keyframes showUp {
    from {
      opacity: 0;
      transform: scale(0.6);
    }
  }

  .modal__box div:nth-child(1) {
    display: flex;
    justify-content: space-between;

    background-color: var(--grey-2);
    padding: 0.75rem 1.25rem;

    border-radius: 0.1rem 0.1rem 0 0;
  }

  .modal__box div h3 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 0.9375rem;
  }

  .modal__box div button {
    background: none;
    border: none;
  }

  .modal__box div button svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--grey-1);
  }
  .modal__box div button svg:hover {
    color: var(--grey-0);
  }
`;

export default Container;
