import styled from "styled-components";

const FormContainer = styled.div`
  min-width: 18.75rem;
  width: 100%;
  max-width: 23.0625rem;

  padding: 33.6px 1.175rem;

  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;

  color: var(--grey-0);
  background-color: var(--grey-3);
  border-radius: 0.2005rem;

  h3 {
    font-size: 1rem;
    margin-bottom: 1.4269rem;
  }

  form {
    width: 100%;
  }

  label {
    display: block;
    font-size: 0.7rem;
    margin-bottom: 0.495rem;
  }

  input {
    width: 100%;
    height: 38.5px;

    color: var(--grey-0);
    background: var(--grey-2);

    border: 0.9772px solid var(--grey-1);
    border-radius: 3.20867px;

    margin-bottom: 1.3125rem;
    padding-left: 0.8125rem;
    transition: .2s;
  }

  input:focus {
    border: 0.9772px solid var(--grey-0);
  }

  button {
    display: block;
    width: 100%;
    height: 2.4rem;

    color: var(--grey-0);
    background: var(--color-primary);

    border: 1.2182px solid var(--color-primary);
    border-radius: 0.25rem;

    margin-bottom: 1.7rem;
    transition: .2s;
  }

  button:hover{
    background-color: var(--color-primary-focus);
  }

  button:active {
    transform: scale(0.991);
  }

  p {
    color: var(--grey-1);
    font-weight: 600;
    font-size: 0.6016rem;

    margin-bottom: 1.1031rem;
  }

  a {
    width: 100%;
    height: 2.4063rem;

    font-weight: 500;
    font-size: 0.8022rem;
    text-align: center;
    text-decoration: none;

    color: var(--grey-0);
    background-color: var(--grey-1);

    background: var(--grey-1);

    padding-top: 0.6rem;
    border: 0.0611rem solid var(--grey-1);
    border-radius: 0.2005rem;
    transition: .2s;
  }

  a:hover{
    background-color: var(--grey-2);
  }

  a:active {
    transform: scale(0.991);
  }
`;

export default FormContainer;
