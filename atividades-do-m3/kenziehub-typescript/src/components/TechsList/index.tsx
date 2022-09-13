import { useAuth } from "../../contexts/AuthContext";
import TechCard from "../TechCard";
import StyledList from "./styles";

const TechsList = () => {
  const { techs } = useAuth();

  return (
    <StyledList>
      {techs.map((tech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </StyledList>
  );
};

export default TechsList;
