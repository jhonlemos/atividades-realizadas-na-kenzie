import "./style.css";

const InputSearch = ({
  products,
  setFilteredProducts,
  valueInput,
  setValueInput,
}) => {
  const filterProducts = (event) => {
    const value = event.target.value;

    const filterSearchProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase())
      );
    });
    setValueInput(value);
    setFilteredProducts(filterSearchProducts);
  };

  return (
    <div className="InputSearch-div">
      <input
        type="text"
        value={valueInput}
        placeholder="Digitar Pesquisa"
        onChange={(event) => filterProducts(event)}
      ></input>
      <button>Pesquisar</button>
    </div>
  );
};

export default InputSearch;
