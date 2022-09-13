import styled from "styled-components";

const StyledList = styled.ul`
  min-width: 18.75rem;
  width: 100%;
  max-width: 90%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 0 0.7rem 2.1rem;
  padding: 1.37rem 8.5px;

  border-radius: 0.2005rem;
  background-color: var(--grey-3);

  @media screen and (min-width: 768px) {
    
      max-width: 55%;
  }
`;

export default StyledList;
