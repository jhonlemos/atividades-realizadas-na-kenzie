import "./style.css";

const ListaDeFrutas = ({ fruits, setFruits }) => {
  function filtrarFrutasVermelhas() {
    setFruits(fruits.filter((elem) => elem.color === "red"));
  }

  const precoTotal = fruits.reduce(
    (valorAnterior, valorAtual) => valorAnterior + valorAtual.price,
    0,
  );
  return (
    <div className="container">
      <p>Preço total = {precoTotal}</p>
      <ul>
        {fruits.map((elem, index) => (
          <li key={index}> {elem.name}</li>
        ))}
      </ul>
      <button onClick={filtrarFrutasVermelhas}>
        Filtrar por frutas vermelhas
      </button>
    </div>
  );
};
export default ListaDeFrutas;
