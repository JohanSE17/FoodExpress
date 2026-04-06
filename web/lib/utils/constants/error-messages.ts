import {
  ISignInFormErrors,
  ISignUpFormErrors,
  INoticiationErrors,
} from "@/lib/utils/interfaces";


// Mensajes de error

export const PasswordErrors = [
  "Al menos 6 caracteres_label",
  "Al menos una letra minúscula (a-z)_label",
  "Al menos una letra mayúscula (A-Z)_label",
  "Al menos un número (0-9)",
  "Al menos un carácter especial",
  "La contraseña no coincide",
];

export const SignUpErrors: ISignUpFormErrors = {
  firstName: ["Required", "El nombre no puede estar vacío"],
  lastName: ["Required", "El apellido no puede estar vacío"],
  email: ["Required", "Email invalido"],
  password: ["Required", ...PasswordErrors],
  confirmPassword: ["Required", "Contraseña debe coincidir"],
};

export const SignInErrors: ISignInFormErrors = {
  email: ["Required", "Email invalido"],
  password: ["Required"],
};

export const NotificationErrors: INoticiationErrors = {
  title: ["Requerido"],
  body: ["Requerido"],
};
