import "./style.css";

const CartTotalValue = ({ cartTotal, removeAllProducts }) => {
  return (
    cartTotal > 0 && (
      <div className="CartTotal-div">
        <div className="CartTotalValue-div-total">
          <h4>Total</h4>
          <p>R$ {cartTotal}</p>
        </div>
        <button onClick={() => removeAllProducts()}>Remover todos</button>
      </div>
    )
  );
};

export default CartTotalValue;
