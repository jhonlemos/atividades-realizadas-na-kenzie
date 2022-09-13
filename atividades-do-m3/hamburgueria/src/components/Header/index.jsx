import InputSearch from "./InputSearch";
import Logo from "./Logo";
import "./style.css";

const Header = ({
  filteredProducts,
  setFilteredProducts,
  products,
  valueInput,
  setValueInput,
}) => {
  return (
    <header>
      <Logo />
      <InputSearch
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        valueInput={valueInput}
        setValueInput={setValueInput}
      />
    </header>
  );
};

export default Header;
