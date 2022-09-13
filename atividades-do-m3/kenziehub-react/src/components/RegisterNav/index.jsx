import Logo from "../Logo";
import NavContainer from "./styles";

const RegisterNav = ({onClickFunc}) => {
  return (
    <NavContainer>
      <div>
        <Logo />
        <button onClick={onClickFunc}>Voltar</button>
      </div>
    </NavContainer>
  );
};

export default RegisterNav;
