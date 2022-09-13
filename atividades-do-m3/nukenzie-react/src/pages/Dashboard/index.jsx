import Form from "../../components/Form";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import Filters from "../../components/Filters";
import { useState } from "react";
import "./styles.css";

function Dashboard({ setIsLogged }) {
  const [listTransactions, setListTransactions] = useState([]);

  const [filterTransactions, setFilterTransactions] =
    useState(listTransactions);

  const filters = {
    getAll: () => {
      setFilterTransactions(listTransactions);
    },
    getEntradas: () => {
      setFilterTransactions(
        listTransactions.filter((item) => item.type === "entrada"),
      );
    },
    getSaidas: () => {
      setFilterTransactions(
        listTransactions.filter((item) => item.type === "saída"),
      );
    },
  };
  const excluirCard = (id) => {
    setListTransactions(listTransactions.filter((item) => item.id !== id));
    setFilterTransactions(filterTransactions.filter((item) => item.id !== id));
  };

  const listaVazia = (
    <div className="listaVazia">
      <div className="listaVazia1"></div>
      <div className="listaVazia2"></div>
    </div>
  );

  return (
    <div className="dashBoard">
      <header className="header">
        <h1 className="h1">
          Nu<span className="span">Kenzie</span>
        </h1>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => setIsLogged(false)}
          className="headerButton"
        >
          Início
        </button>
      </header>
      <main className="mainDash">
        <div className="divBoxLeft">
          <div className="divBoxLeftTop">
            <Form
              filterTransactions={filterTransactions}
              setFilterTransactions={setFilterTransactions}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </div>
          <div className="total">
            <TotalMoney listTransactions={filterTransactions} />
          </div>
        </div>
        <div className="divBoxRight">
          <div className="filterTitle">
            <h3>Resumo Financeiro</h3>
            <Filters filters={filters} />
          </div>
          {filterTransactions.length !== 0 ? (
            <List
              excluirCard={excluirCard}
              listTransactions={filterTransactions}
            />
          ) : (
            <div className="listaBoxRight">
              <h3>Você ainda não possui nenhum lançamento</h3>

              {listaVazia}
              {listaVazia}
              {listaVazia}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
