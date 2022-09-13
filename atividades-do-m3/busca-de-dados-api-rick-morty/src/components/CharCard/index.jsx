const ChardCards = ({ personagem }) => {
  return (
    <>
      <div cor={personagem.status}>
        {personagem.status === "Alive" ? (
          <>
            <li className="vivo">
              <h3>{personagem.name}</h3>
              <img src={personagem.image} alt="personagem" />
              <p>Espécie:{personagem.species}</p>
              <p>Status:{personagem.status}</p>
            </li>{" "}
          </>
        ) : (
          <>
            <li className="morto">
              <h3>{personagem.name}</h3>
              <img src={personagem.image} alt="personagem" />
              <p>Espécie:{personagem.species}</p>
              <p>Status:{personagem.status}</p>
            </li>
          </>
        )}
      </div>
    </>
  );
};

export default ChardCards;
