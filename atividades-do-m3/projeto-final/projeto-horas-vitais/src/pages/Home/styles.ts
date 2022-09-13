import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;

  .Container {
    display: flex;
    margin: 10%;
    width: 100%;
  }

  .home {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 50vw;
    max-height: 80%;
    text-overflow: clip;
    border-right: 0.1px solid #16a08448;
  }

  .home h1 {
    text-align: center;
    margin-bottom: 2rem;
    text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    color: #444;
    font-size: 2rem;
  }

  .heading span {
    text-transform: uppercase;
    color: #16a085;
  }

  .home .content h2 {
    width: 90%;
    font-size: 1.7rem;
    color: #444;
    margin-top: 18px;
    text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
  }

  .home .content h3 {
    font-size: 5rem;
    color: #777;
    line-height: 1.8;
    text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
  }

  .home .p1 {
    width: 90%;
    color: #16a085;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 18px;
  }

  .home .p2 {
    width: 90%;
    color: #777;
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 10px;
  }

  .about {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 50vw;
    height: 80%;
    border-radius: 8px;
    text-overflow: clip;
  }

  .about h1 {
    text-align: center;
    margin-bottom: 2rem;
    text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    color: #444;
    font-size: 2rem;
  }

  .about .image img {
    height: 300px;
  }

  .about .content h3 {
    color: #444;
    text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
    font-size: 2rem;
    line-height: 1.5;
  }

  .about .content .p1 {
    width: 90%;
    color: #16a085;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 18px;
    line-height: 1.5;
  }

  .about .content .p2 {
    width: 90%;
    color: #777;
    font-size: 1rem;
    margin-top: 10px;
    line-height: 1.5;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 900px) {
    .about .content p {
      width: 90vw;
    }
  }

  .content button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem;
    padding-left: 1rem;
    border: 0.2rem solid #16a085;
    border-radius: 0.5rem;
    height: 56px;
    box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);
    color: #16a085;
    cursor: pointer;
    font-size: 1.7rem;
    background: #fff;

    :hover {
      background: #16a085;
      color: #fff;
    }

    span {
      padding: 0.4rem 1rem;
      border-radius: 0.5rem;
      background: #16a085;
      color: #fff;
      margin-left: 0.5rem;
    }

    .btn:hover {
      background: #16a085;
      color: #fff;
    }

    :hover span {
      color: #16a085;
      background: #fff;
      margin-left: 1rem;
    }
  }

  @media (max-width: 900px) {
    .home .content p {
      width: 90vw;
    }
    @media (max-width: 900px) {
      .Container {
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
      .home {
        width: 100%;
        h3 {
          width: 70%;
        }
      }
      .content {
        width: 100%;
        text-align: center;
      }
      .content button {
        font-size: 1rem;
        margin-top: 2rem;
        padding: 0.2rem;
        padding-left: 1rem;
      }
    }
    @media (max-width: 500px) {
      .Container {
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
      .home {
        width: 100%;
        h3 {
          width: 100%;
        }
      }
      .content {
        text-align: center;
        width: 100%;
      }
    }
    @media (max-width: 370px) {
      .Container {
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
      .home {
        width: 100%;
        h3 {
          width: 100%;
          font-size: 2rem;
        }
        .content h2 {
          font-size: 1.5rem;
        }
      }
      .content {
        text-align: center;
        width: 100%;
      }
      .content button {
        font-size: 1rem;
        margin-top: 1rem;
        width: 80vw;
        padding: 0.2rem;
        padding-left: 1rem;
      }
      .about {
        h1 {
          font-size: 2.3rem;
        }
      }
    }
    @media (max-width: 300px) {
      .content button {
        font-size: 1rem;
        margin-top: 1rem;
        width: 100vw;
        padding: 0.2rem;
        padding-left: 1rem;
      }
    }
  }
`;
