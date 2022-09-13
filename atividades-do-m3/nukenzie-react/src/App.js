import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      {isLogged ? (
        <Dashboard setIsLogged={setIsLogged} />
      ) : (
        <Home setIsLogged={setIsLogged} />
      )}
    </div>
  );
}

export default App;
