import ChardCards from "../CharCard";
import { Lista } from "./styles";

const Characters = ({ characterList }) => {
  return (
    <>
      <h1>Meus personagens!</h1>
      <Lista>
        {characterList.map((personagem, index) => (
          <ChardCards personagem={personagem} key={index} />
        ))}
      </Lista>
    </>
  );
};

export default Characters;
