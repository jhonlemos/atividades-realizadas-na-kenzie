import StyledCard from "./styles";

import { useAuth } from "../../contexts/AuthContext";

const TechCard = ({ tech }) => {
  const { setModal, setTech } = useAuth();

  function handleClick() {
    setModal('edit')
    setTech(tech)
  }

  return (
    <StyledCard onClick={handleClick}>
      <h3>{tech.title}</h3>
      <p>{tech.status}</p>
    </StyledCard>
  );
};

export default TechCard;
