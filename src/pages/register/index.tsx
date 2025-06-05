import AuthTemplate from "../../templates/auth-template";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type RegisterFormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zipCode: string;
  password: string;
  confirmPassword: string;
};
const schemaValidation = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  phone: Yup.string().required("Telefone é obrigatório"),
  city: Yup.string().required("Cidade é obrigatória"),
  state: Yup.string().required("Estado é obrigatório"),
  zipCode: Yup.string().required("CEP é obrigatório"),
  password: Yup.string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .matches(/^[a-zA-Z0-9]+$/, "Senha deve conter apenas letras e números")
    .required("Senha é obrigatória"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "As senhas devem ser iguais")
    .required("Confirmação de senha é obrigatória"),
});

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: yupResolver(schemaValidation) });

  function cadastrar(values: RegisterFormData) {
    console.log("Dados do cadastro:", values);
    navigate("/login");
  }

  return (
    <AuthTemplate>
      <div className="flex items-center justify-center h-full my-8 ">
        <div className="bg-gray-50 p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-950">
            My App
          </h2>
          <h1 className="text-md mb-3">Faça o seu cadastro</h1>
          <form onSubmit={handleSubmit(cadastrar)}>
            <div className="mb-4">
              <input
                type="text"
                {...register("name")}
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
                placeholder="Nome Completo"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                {...register("email")}
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
                placeholder="E-mail"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="tel"
                {...register("phone")}
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
                placeholder="Telefone"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                {...register("city")}
                id="city"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
                placeholder="Cidade"
              />
              {errors.city && (
                <span className="text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                {...register("state")}
                id="state"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
                placeholder="Estado"
              />
              {errors.state && (
                <span className="text-red-500 text-sm">
                  {errors.state.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                {...register("zipCode")}
                id="zipCode"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
                placeholder="CEP"
              />
              {errors.zipCode && (
                <span className="text-red-500 text-sm">
                  {errors.zipCode.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                {...register("password")}
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
                placeholder="Senha"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                {...register("confirmPassword")}
                id="confirmPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
                placeholder="Confirmar Senha"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-900 transition duration-200"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </AuthTemplate>
  );
}
