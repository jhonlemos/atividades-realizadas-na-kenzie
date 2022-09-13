import Product from "./Product";
import "./style.css";

const ProductsList = ({ products, filteredProducts, addToCart }) => {
  const showProducts = (product) => {
    return <Product key={product.id} product={product} addToCart={addToCart} />;
  };

  return (
    <ul className="ProductsList-ul">
      {filteredProducts.length > 0
        ? filteredProducts.map((product) => {
            return showProducts(product);
          })
        : products?.map((product) => {
            return showProducts(product);
          })}
    </ul>
  );
};

export default ProductsList;
