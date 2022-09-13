import StyledDiv from "./styles";
import { BsPlusLg } from "react-icons/bs";

import { useAuth } from "../../contexts/AuthContext";

const ListNav = () => {
  const { setModal } = useAuth();

  return (
    <StyledDiv>
      <h2>Tecnologias</h2>
      <button onClick={() => setModal("add")}>
        <BsPlusLg />
      </button>
    </StyledDiv>
  );
};

export default ListNav;
