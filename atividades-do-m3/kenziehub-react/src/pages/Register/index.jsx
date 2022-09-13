import { useNavigate } from "react-router-dom";
import RegisterNav from "../../components/RegisterNav";
import RegisterForm from "../../components/RegisterForm";
import StyledMain from "./styles";
import { motion } from "framer-motion";

const Register = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <RegisterNav onClickFunc={() => navigate(`/login`)} label={"Voltar"} />
      <StyledMain>
        <RegisterForm />
      </StyledMain>
    </motion.div>
  );
};

export default Register;
