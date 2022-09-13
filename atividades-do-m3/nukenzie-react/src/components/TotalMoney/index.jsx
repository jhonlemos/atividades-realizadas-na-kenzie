import { useState, useEffect } from "react";
import toReal from "../../Helper/currency";

import "./styles.css";

function TotalMoney({ listTransactions }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(listTransactions.reduce((acc, next) => acc + next.value, 0));
  }, []);
  useEffect(() => {
    setTotal(listTransactions.reduce((acc, next) => acc + next.value, 0));
  }, [listTransactions]);

  return (
    <>
      {total ? (
        <div className="boxValorTotal">
          <div className="divValorTotal">
            <h3 className="h3ValorTotal">Valor Total</h3>
            <div id="total">
              <b>{toReal(total)}</b>
            </div>
          </div>
          <h4 className="h4ValorTotal">O valor se refere ao saldo </h4>
        </div>
      ) : null}
    </>
  );
}

export default TotalMoney;
