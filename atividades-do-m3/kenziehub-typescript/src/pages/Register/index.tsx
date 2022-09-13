import RegisterNav from "../../components/RegisterNav";
import RegisterForm from "../../components/RegisterForm";
import StyledMain from "./styles";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <RegisterNav />
      <StyledMain>
        <RegisterForm />
      </StyledMain>
    </motion.div>
  );
};

export default Register;
