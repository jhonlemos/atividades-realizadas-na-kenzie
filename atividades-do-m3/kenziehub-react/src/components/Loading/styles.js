import styled from "styled-components";

const StyledLoading = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    color: var(--grey-2);
    width: 100px;
    height: 100px;
    animation: spin .8s infinite;
  }

  @keyframes spin {
    to {
        transform: rotate(360deg);
    }
  }
`;

export default StyledLoading;
