import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchema } from "../../validators";
import { Input } from "../Input";

import { MdClose } from "react-icons/md";
import StyledForm from "./styles";

import { useAuth } from "../../contexts/AuthContext";

const ModalAdd = () => {
  const { setModal, saveNewTech } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createSchema) });
  return (
    <>
      <div>
        <h3>Cadastrar Tecnologia</h3>
        <button onClick={() => setModal(null)}>
          <MdClose />
        </button>
      </div>
      <StyledForm onSubmit={handleSubmit(saveNewTech)}>
        <Input
          id="title"
          register={register}
          error={errors?.title}
          label="Nome"
          placeholder="Tecnologia"
        />

        <label htmlFor="status">Selecionar status</label>
        <select id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <button type="submit">Cadastrar Tecnologia</button>
      </StyledForm>
    </>
  );
};

export default ModalAdd;
