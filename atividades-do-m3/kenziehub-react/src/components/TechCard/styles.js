import styled from "styled-components";

const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;

  padding: 0.8rem;

  border-radius: 0.2005rem;
  background-color: var(--grey-4);
  transition: 0.2s;

  z-index: 1;

  cursor: pointer;

  :hover {
    background-color: var(--grey-2);
    transform: scale(1.03);
  }

  h3 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 14.2123px;
  }

  p {
    color: var(--grey-1);
    font-weight: 400;
    font-size: 12.182px;
  }
`;

export default StyledCard;
