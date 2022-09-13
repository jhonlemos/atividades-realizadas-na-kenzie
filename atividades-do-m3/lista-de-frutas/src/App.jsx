import "./App.css";
import ListaDeFrutas from "./components/ListaDeFrutas";
import { useState } from "react";
function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  return (
    <div className="App">
      <ListaDeFrutas fruits={fruits} setFruits={setFruits} />
    </div>
  );
}

export default App;
