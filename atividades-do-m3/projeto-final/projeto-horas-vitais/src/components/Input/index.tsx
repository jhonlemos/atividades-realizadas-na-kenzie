import { InputContainer } from "./styles";

interface IInputProps {
  type: string;
  id: string;
  label?: string;
  error?: string;
  placeholder?: string;
  register: any;
}

const Input = ({
  type,
  id,
  label,
  error,
  placeholder,
  register,
}: IInputProps) => {
  return (
    <InputContainer error={error}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register(id)} />
      {error && <span>{error}</span>}
    </InputContainer>
  );
};

export default Input;
