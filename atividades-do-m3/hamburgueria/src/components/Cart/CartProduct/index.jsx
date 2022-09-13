/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useEffect, useState } from "react";

const CartProduct = ({
  product,
  addToCart,
  removeProduct,
  cartProducts,
  cartTotal,
  setCartTotal,
}) => {
  const [thisProdQtd, setThisProdQtd] = useState(1);

  const qtdProduct = (product) => {
    const filterProducts = cartProducts.filter((cartProduct) => {
      return cartProduct === product;
    });

    setThisProdQtd(filterProducts.length);
  };

  useEffect(() => qtdProduct(product), [cartProducts]);

  const checkRemove = (product) => {
    if (thisProdQtd > 1) {
      setThisProdQtd(thisProdQtd - 1);
      const newTotal = cartTotal - product.price;
      const newTotalFixed = newTotal.toFixed(2);
      setCartTotal(newTotalFixed);
    } else if (thisProdQtd === 1) {
      removeProduct(product);
    }
  };

  return (
    product && (
      <li id={product.id}>
        <img src={product.img} alt={product.name} />
        <div className="CartProduct-infos">
          <h3>{product.name}</h3>
          <span>{product.category}</span>
        </div>
        <div className="CartProduct-remove-changeQtd">
          <button
            onClick={() => {
              removeProduct(product);
            }}
          >
            Remover
          </button>

          <div className="CartProduct-changeQtd">
            <button onClick={() => addToCart(product)}>+</button>
            <span>{thisProdQtd}</span>
            <button onClick={() => checkRemove(product)}>-</button>
          </div>
        </div>
      </li>
    )
  );
};

export default CartProduct;
