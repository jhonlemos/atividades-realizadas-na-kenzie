import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import NavContainer from "./styles";

const RegisterNav = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <div>
        <Logo />
        <button onClick={() => navigate(`/login`)}>Voltar</button>
      </div>
    </NavContainer>
  );
};

export default RegisterNav;
