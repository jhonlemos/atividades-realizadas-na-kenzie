import toReal from "../../Helper/currency";
import "./styles.css";

function Card({ transaction, excluirCard, id }) {
  return (
    <>
      <div className="listaCard" style={{ display: "flex", gap: "50px" }}>
        <div
          className={transaction.type === "entrada" ? "corVerde" : "corCinza"}
        ></div>
        <div className="divEsquerda">
          <div className="descricao">
            <b>{transaction.description}</b>
          </div>
          <div className="tipo">{transaction.type}</div>
        </div>
        <div className="divDireita">
          <div className="valor">{toReal(transaction.value)}</div>
          <button className="botao" onClick={() => excluirCard(id)}>
            🗑️{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
