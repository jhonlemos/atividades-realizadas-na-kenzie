/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

const App = () => {
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [valueInput, setValueInput] = useState("");

  const [cartProducts, setCartProducts] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const calculateTotal = () => {
    const values = [];

    if (cartProducts.length > 0) {
      cartProducts.forEach((product) => {
        values.push(product.price);
      });

      const total = values.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      );
      const totalFixed = total.toFixed(2);
      setCartTotal(totalFixed);
    }
  };

  useEffect(() => calculateTotal(), [cartProducts]);

  const addToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const removeProduct = (product) => {
    const newCartProducts = cartProducts.filter((cartProduct) => {
      return cartProduct !== product;
    });

    setCartProducts(newCartProducts);
  };

  const removeAllProducts = () => {
    setCartProducts([]);
  };

  return (
    <div className="App">
      <Header
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        valueInput={valueInput}
        setValueInput={setValueInput}
      />
      <main className="App-main">
        <ProductsList
          products={products}
          filteredProducts={filteredProducts}
          addToCart={addToCart}
          valueInput={valueInput}
        />

        <Cart
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          addToCart={addToCart}
          removeProduct={removeProduct}
          removeAllProducts={removeAllProducts}
        />
      </main>
    </div>
  );
};

export default App;
