import "./style.css";
import CartProduct from "./CartProduct";
import CartTotalValue from "./CartTotalValue";

const Cart = ({
  setCartProducts,
  cartProducts,
  cartTotal,
  setCartTotal,
  addToCart,
  removeProduct,
  removeAllProducts,
}) => {
  const uniqueProducts = () => {
    const uniqueProd = [];
    cartProducts.forEach((cartProduct) => {
      if (uniqueProd.indexOf(cartProduct) === -1) {
        uniqueProd.push(cartProduct);
      }
    });

    return uniqueProd;
  };

  const uniqueProd = uniqueProducts();

  return (
    <div className="Cart-div">
      <div className="Cart-div-header">
        <h2>Carrinho de compras</h2>
      </div>
      {cartProducts.length > 0 ? (
        <div className="Cart-div-content">
          <ul className="Cart-div-ul">
            {uniqueProd.map((product) => {
              return (
                <CartProduct
                  product={product}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                  removeProduct={removeProduct}
                  addToCart={addToCart}
                  setCartTotal={setCartTotal}
                  cartTotal={cartTotal}
                />
              );
            })}
          </ul>
          <CartTotalValue
            cartTotal={cartTotal}
            cartProducts={cartProducts}
            removeAllProducts={removeAllProducts}
          />
        </div>
      ) : (
        <div className="Cart-div-content">
          <div className="Cart-div-sacolaVazia">
            <h4>Sua sacola está vazia</h4>
            <span>Adicione itens</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
