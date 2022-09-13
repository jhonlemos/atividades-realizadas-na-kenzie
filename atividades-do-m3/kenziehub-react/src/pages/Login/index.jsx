import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";
import StyledMain from "./styles";
import { motion } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <StyledMain>
        <Logo />
        <LoginForm />
      </StyledMain>
    </motion.div>
  );
};

export default Login;
