import { useState, useEffect } from "react";
import "./App.css";
import Characters from "./components/Characters";
import { Button } from "./components/Characters/styles";
import Global from "./styles/global";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((reponse) => setCharacterList(reponse.results))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <>
      <Global />
      <Button onClick={nextPage}>Next</Button>
      <Button onClick={previousPage}>Prev</Button>
      <Characters characterList={characterList} />
    </>
  );
}

export default App;
