import { useAuth } from "../../contexts/AuthContext";
import HeaderContainer from "./styles";

const Header = () => {
  const { user } = useAuth();

  return (
    <HeaderContainer>
      <div>
        <h3>Olá, {user?.name}!</h3>
        <p>{user?.course_module}</p>
      </div>
    </HeaderContainer>
  );
};

export default Header;
