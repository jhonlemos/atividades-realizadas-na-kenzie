import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

function Form({
  listTransactions,
  setListTransactions,
  setFilterTransactions,
  filterTransactions,
}) {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  function addForm(newForm) {
    setFilterTransactions([...filterTransactions, newForm]);
    setListTransactions([...listTransactions, newForm]);
    reset();
  }
  function reset() {
    setType("");
    setDescription("");
    setValue("");
  }

  return (
    <>
      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <h3 className="formH3">Descrição</h3>
        <input
          className="formDescricao"
          value={description}
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <p className="pForm">Ex: compra de roupas</p>
        <div className="valorSelect">
          <input
            className="formValor"
            value={value}
            type="number"
            placeholder="Valor R$"
            onChange={(event) => setValue(Number(event.target.value))}
          ></input>

          <select
            value={type}
            className="selectBoxLeft"
            onChange={(event) => {
              setType(event.target.value);
            }}
            name="select"
          >
            <option value="">Tipo de Entrada</option>
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
        <button
          className="buttonBoxLeft"
          style={{ cursor: "pointer" }}
          disabled={!type || !description || !value ? true : false}
          onClick={() =>
            addForm({
              id: uuidv4(),
              description,
              type,
              value: type === "saída" ? value * -1 : value,
            })
          }
        >
          Inserir valor
        </button>
      </form>
    </>
  );
}
export default Form;
