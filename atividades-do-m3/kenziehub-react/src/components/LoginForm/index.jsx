import FormContainer from "./styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validators";
import { Input, PasswordLogin } from "../Input";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const LoginForm = () => {
  const { logIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [passwordView, SetPasswordView] = useState({
    view: false,
    type: "password",
  });

  return (
    <>
      <FormContainer>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(logIn)}>
          <Input
            id="email"
            register={register}
            error={errors?.email}
            label="Email"
            placeholder="Digite aqui seu email"
          />

          <PasswordLogin
            id="password"
            register={register}
            error={errors?.password}
            label="Senha"
            placeholder="Digite aqui sua senha"
            passwordView={passwordView}
            SetPasswordView={SetPasswordView}
          />

          <button type="submit">Entrar</button>
        </form>

        <p>Ainda não possui uma conta?</p>
        <Link to={`/registro`}>Cadastre-se</Link>
      </FormContainer>
    </>
  );
};

export default LoginForm;
