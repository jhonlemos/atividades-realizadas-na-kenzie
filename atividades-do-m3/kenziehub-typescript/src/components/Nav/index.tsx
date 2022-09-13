import Logo from "../Logo";
import NavContainer from "./styles";
import { useAuth } from "../../contexts/AuthContext";

const Nav = () => {
const { logOut } = useAuth()

  return (
    <NavContainer>
      <div>
        <Logo />
        <button onClick={logOut}>Sair</button>
      </div>
    </NavContainer>
  );
};

export default Nav;
