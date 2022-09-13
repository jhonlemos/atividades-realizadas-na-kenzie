import HeaderContainer from "../Header/styles";

const Header = ({ user }) => {
  return (
    <HeaderContainer>
      <div>
        <h3>Olá, {user.name}!</h3>
        <p>{user.course_module}</p>
      </div>
    </HeaderContainer>
  );
};

export default Header;
