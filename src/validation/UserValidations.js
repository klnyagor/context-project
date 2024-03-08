import * as Yup from 'yup';
export const UserValidationSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, 'O nome deve ter no mínimo 2 caracteres')
    .max(50, 'O nome deve ter no máximo 50 caracteres')
    .matches(
      /^(?!\s)(?!.*\s\s)[^\s].*[^\s]$/,
      'Campo preenchido de forma incorreta! O nome não pode começar, terminar ou conter sequências de espaços em branco',
    )
    .required('Este campo é obrigatório!'),

  email: Yup.string()
    .email('E-mail Inválido')
    .required('Este campo é obrigatório!'),
});
