import "./style.css";

const Product = ({ product, addToCart }) => {
  return (
    <li id={product.id} className="Product-li">
      <div className="Product-img">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="Product-divInfos">
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <p>R$ {product.price}</p>
        <button
          onClick={() => {
            addToCart(product);
          }}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};

export default Product;
