import { useState, useEffect } from "react";
import "./App.css";
import Characters from "./components/Characters";
import Global from "./styles/global";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((reponse) => setCharacterList(reponse.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Global />
      <Characters characterList={characterList} />
    </>
  );
}

export default App;
