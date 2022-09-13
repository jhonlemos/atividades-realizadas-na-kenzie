import styled from "styled-components";

const StyledForm = styled.form`
    background-color: var(--grey-3);
    padding: 0.75rem 1.25rem;

    label {
    color: var(--grey-0);
    display: block;
    font-size: 0.7rem;
    margin-bottom: 0.495rem;
  }

  input {
    width: 100%;
    height: 38.5px;

    color: var(--grey-0);
    background: var(--grey-2);

    border: 0.0611rem solid var(--grey-2);
    border-radius: 3.20867px;

    margin-bottom: 1.3125rem;
    padding-left: 0.8125rem;
    transition: 0.2s;
  }
  input:focus {
    border: 0.9772px solid var(--grey-0);
  }

  select {
    width: 100%;
    height: 2.4063rem;
    margin-bottom: 1.3125rem;
    padding-left: 0.8125rem;

    color: var(--grey-1);
    background: var(--grey-2);

    border: 0.0611rem solid var(--grey-2);
    border-radius: 0.2005rem;
  }

  select:focus {
    color: var(--grey-0);
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

    margin-bottom: 1rem;
    transition: .2s;
  }

  button:hover{
    background-color: var(--color-primary-focus);
  }

  button:active {
    transform: scale(0.991);
  }

  span {
    color: var(--grey-0);
  }
`

export default StyledForm