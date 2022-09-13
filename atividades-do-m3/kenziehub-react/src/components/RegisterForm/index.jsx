import FormContainer from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validators";

import { useNavigate } from "react-router-dom";
import { Input, Password } from "../Input";
import { useAuth } from "../../contexts/AuthContext";

const RegisterForm = () => {
  const { registerUser } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  return (
    <>
      <FormContainer>
        <div>
          <h3>Crie sua conta</h3>
          <p>Rápido e grátis, vamos nessa</p>
        </div>
        <form onSubmit={handleSubmit(registerUser)}>
          <Input
            id="name"
            register={register}
            error={errors?.name}
            placeholder="Digite aqui seu nome"
            label="Nome"
          />
          <Input
            id="email"
            register={register}
            error={errors?.email}
            placeholder="Digite aqui seu email"
            label="Email"
          />
          <Password
            id="password"
            register={register}
            error={errors?.password}
            placeholder="Digite aqui seu senha"
            label="Senha"
          />
          <Password
            id="confirmPassword"
            register={register}
            error={errors?.confirmPassword}
            placeholder="Digite aqui seu senha"
            label="Confirmar senha"
          />

          <Input
            id="bio"
            register={register}
            error={errors?.bio}
            placeholder="Digite aqui sua biografia"
            label="Bio"
          />

          <Input
            id="contact"
            register={register}
            error={errors?.contact}
            placeholder="(99) 99999-9999"
            label="Contato"
          />

          <label htmlFor="course_module">Selecionar módulo</label>
          <select id="course_module" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro Módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo Módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro Módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto Módulo
            </option>
          </select>

          <button type="submit">Cadastrar</button>
        </form>
      </FormContainer>
    </>
  );
};

export default RegisterForm;
