import StyledCard from "./styles";

import { ITech, useAuth } from "../../contexts/AuthContext";

interface ITechCardProp {
  tech: ITech
}


const TechCard = ({ tech }: ITechCardProp) => {
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
