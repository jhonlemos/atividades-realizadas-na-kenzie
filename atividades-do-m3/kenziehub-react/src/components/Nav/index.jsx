import Logo from "../Logo";
import NavContainer from "./styles";

const Nav = ({onClickFunc}) => {
  return (
    <NavContainer>
      <div>
        <Logo />
        <button onClick={onClickFunc}>Sair</button>
      </div>
    </NavContainer>
  );
};

export default Nav;
