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

    cursor: not-allowed;
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

  .buttons{
    display: flex;
    gap: 1.375rem;
  }

  .buttons button[type=submit] {
    width: 70%;
    height: 2.4rem;

    color: var(--grey-0);
    background: var(--color-primary-negative);

    border: 1.2182px solid var(--color-primary-negative);
    border-radius: 0.25rem;

    margin-bottom: 1rem;
    transition: .2s;
  }

  .buttons button[type=submit]:hover{
    background-color: var(--color-primary-focus);
  }

  .buttons button[type=submit]active {
    transform: scale(0.991);
  }

  .buttons button+p {
    width: 35%;
    height: 2.4rem;

    text-align: center;

    color: var(--grey-0);
    background: var(--grey-2);

    border: 1.2182px solid var(--grey-2);
    border-radius: 0.25rem;

    margin-bottom: 1rem;
    padding-top: .4rem;
    transition: .2s;

    cursor: pointer;
    
  }

  .buttons button+p:hover {
    background: var(--negative);
    border: 1.2182px solid var(--negative);
    
  }
`

export default StyledForm