import { BiErrorCircle } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Container, Error } from "./styles";
export const Input = ({ id, register, error, label, placeholder }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <Container>
      <input id={id} type="text" placeholder={placeholder} {...register(id)} />
      {error?.message && (
        <Error>
          <BiErrorCircle />
          <span>{error?.message}</span>
        </Error>
      )}
    </Container>
  </>
);

export const Password = ({ id, register, error, label, placeholder }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <Container>
      <input
        id={id}
        type="password"
        placeholder={placeholder}
        {...register(id)}
      />
      {error?.message && (
        <Error>
          <BiErrorCircle />
          <span>{error?.message}</span>
        </Error>
      )}
    </Container>
  </>
);

export const PasswordLogin = ({
  id,
  type,
  register,
  error,
  label,
  placeholder,
  passwordView,
  SetPasswordView,
}) => {
  function handleClick() {
    passwordView.view
      ? SetPasswordView({ view: false, type: "password" })
      : SetPasswordView({ view: true, type: "text" });
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Container>
        <input
          id={id}
          type={passwordView.type}
          placeholder={placeholder}
          {...register(id)}
          maxLength="26"
        />
        {passwordView.view ? (
          <FaEyeSlash onClick={handleClick} className="eye" />
        ) : (
          <FaEye onClick={handleClick} className="eye" />
        )}

        {error?.message && (
          <Error>
            <BiErrorCircle />
            <span>{error?.message}</span>
          </Error>
        )}
      </Container>
    </>
  );
};
