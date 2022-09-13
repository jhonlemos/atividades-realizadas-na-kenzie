import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email")
    .required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

const registerSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um email")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não conferem"),
  bio: yup
    .string()
    .required("Bio é obrigatória")
    .min(10, "A biografia deve conter ao menos 10 caracteres"),
  contact: yup
    .string()
    .required("Contato é obrigatório")
    .matches(
      /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
      "O telefone deve ser válido"
    ),
});

const createSchema = yup.object({
  title: yup.string().required("O nome da tech é obrigatório"),
  status: yup.string().required("O nome da tech é obrigatório"),
});

const editSchema = yup.object({
  status: yup.string(),
});

export { loginSchema, registerSchema, createSchema, editSchema };
