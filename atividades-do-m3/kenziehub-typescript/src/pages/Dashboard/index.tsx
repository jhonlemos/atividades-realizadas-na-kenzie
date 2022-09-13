import StyledMain from "./styles";
import { motion } from "framer-motion";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import ListNav from "../../components/ListNav";
import TechsList from "../../components/TechsList";
import Modal from "../../components/Modal";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { modal } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {modal && <Modal />}
      <Nav />
      <Header />
      <StyledMain>
        <ListNav />
        <TechsList />
      </StyledMain>
    </motion.div>
  );
};

export default Dashboard;
