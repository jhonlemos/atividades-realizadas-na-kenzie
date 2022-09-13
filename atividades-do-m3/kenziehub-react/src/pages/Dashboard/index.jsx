import StyledMain from "./styles";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";
import TechsList from "../../components/TechsList";
import ListNav from "../../components/ListNav";
import Modal from "../../components/Modal";
import Loading from "../../components/Loading";

const Dashboard = () => {
  const { user, logOut, modal } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {modal && <Modal />}
      <Nav onClickFunc={logOut} />
      <Header user={user} />
      <StyledMain>
        <ListNav />
        <TechsList />
      </StyledMain>
    </motion.div>
  );
};

export default Dashboard;
