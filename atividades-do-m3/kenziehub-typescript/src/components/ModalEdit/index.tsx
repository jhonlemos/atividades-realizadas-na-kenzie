import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editSchema } from "../../validators";

import { MdClose } from "react-icons/md";
import StyledForm from "./styles";

import { IEditTech, useAuth } from "../../contexts/AuthContext";

const ModalEdit = () => {
  const { setModal, tech, editTech, deleteTech } = useAuth();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<IEditTech>({ resolver: yupResolver(editSchema) });

  return (
    <>
      <div>
        <h3>Tecnologia - Detalhes</h3>
        <button onClick={() => setModal(null)}>
          <MdClose />
        </button>
      </div>
      <StyledForm onSubmit={handleSubmit(editTech)}>
        <label htmlFor="title">Tecnologia</label>
        <input id="title" value={tech?.title} disabled />

        <label htmlFor="status">Status</label>
        <select id="status" {...register("status")} defaultValue={tech?.status}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <div className="buttons">
          <button type="submit">Salvar Tecnologia</button>
          <p className="deleteButton" onClick={() => deleteTech()}>
            Excluir
          </p>
        </div>
      </StyledForm>
    </>
  );
};

export default ModalEdit;
