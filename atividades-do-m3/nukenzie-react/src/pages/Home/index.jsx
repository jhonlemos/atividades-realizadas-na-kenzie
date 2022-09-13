import "./styles.css";
import Button from "../../components/Button";
import { FaCreditCard } from "react-icons/fa";

function Home({ setIsLogged }) {
  return (
    <main className="main">
      <div className="home">
        <div className="homeLeft">
          <h1 className="h1">
            <span className="nu">Nu</span>Kenzie
          </h1>
          <p className="centralize">Centralize o controle das suas finanças</p>
          <p className="deForma">de forma rápida e segura</p>
          <Button width={"241px"} onClick={() => setIsLogged(true)}>
            Iniciar
          </Button>
        </div>
        <div className="homeRight">
          <div className="div1">
            <div className="div2">
              <div className="div3">
                <div className="div4">
                  <div className="botoes">
                    <button id="btnVermelho" className="buttonIndex"></button>
                    <button id="btnVerde" className="buttonIndex"></button>
                    <button id="btnPreto" className="buttonIndex"></button>
                  </div>
                  <div className="divRetangulos">
                    <div className="popUp">
                      <div className="bola">
                        <div className="bolaAmarela">C</div>
                      </div>
                    </div>
                    <div className="retanguloDeCima">
                      <div
                        style={{
                          color: "white",
                          display: "flex",
                          flexDirection: "column",
                        }}
                        className="boxRetanguloDeCima"
                      >
                        <FaCreditCard />
                      </div>
                      <div className="box2RetanguloDeCima">
                        <div className="linha1RetanguloDeCima"></div>
                        <div className="linha2RetanguloDeCima"></div>
                      </div>
                    </div>
                    <div className="retanguloDeBaixo">
                      <div
                        style={{
                          color: "white",
                          display: "flex",
                          flexDirection: "column",
                        }}
                        className="boxRetanguloDeBaixo"
                      >
                        <FaCreditCard />
                      </div>
                      <div className="box2RetanguloDeBaixo">
                        <div className="linha1RetanguloDeBaixo"></div>
                        <div className="linha2RetanguloDeBaixo"></div>
                      </div>
                    </div>

                    <div className="retangulo"></div>
                    <div className="retangulo"></div>
                    <div className="retangulo"></div>
                    <div className="retangulo"></div>
                    <div className="retangulo"></div>
                    <div className="retangulo"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
