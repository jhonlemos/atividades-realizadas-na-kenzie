import Card from "../Card";
import "./styles.css";

function List({ listTransactions, excluirCard }) {
  return (
    <div className="lista">
     
      {listTransactions.map((transaction, index) => (
        <Card
          excluirCard={excluirCard}
          transaction={transaction}
          key={index}
          id={transaction.id}
        />
      ))}
    </div>
  );
}

export default List;
