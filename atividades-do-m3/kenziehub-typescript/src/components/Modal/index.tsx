import Container from "./styles";

import ModalAdd from "../ModalAdd";
import ModalEdit from "../ModalEdit";

import { useAuth } from "../../contexts/AuthContext";

const Modal = () => {
    const { modal } = useAuth()

  return (
    <Container>
      <div className="modal__box">
        {modal === 'add' ? <ModalAdd /> : <ModalEdit />}
      </div>
    </Container>
  );
};

export default Modal;
