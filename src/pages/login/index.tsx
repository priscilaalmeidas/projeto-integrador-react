import AuthTemplate from "../../templates/auth-template";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type LoginFormData = {
  email: string;
  password: string;
};

const schemaValidation = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: Yup.string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .matches(/^[a-zA-Z0-9]+$/, "Senha deve conter apenas letras e números")
    .required("Senha é obrigatória"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(schemaValidation) });

  function login(values: LoginFormData) {
    console.log("Dados do login:", values);
  }

  return (
    <AuthTemplate>
      <div className="flex items-center justify-center h-full ">
        <div className="bg-gray-50 p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-950">
            My App
          </h2>
          <p className="text-center mb-3">Acesse a sua conta</p>
          <form onSubmit={handleSubmit(login)}>
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
            <div className="mb-6">
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
            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-900 transition duration-200"
            >
              Login
            </button>
            <p className="text-center text-gray-600 mt-4">
              Não tem uma conta?{" "}
              <a href="/register" className="text-blue-950 hover:underline">
                Cadastre-se
              </a>
            </p>
          </form>
        </div>
      </div>
    </AuthTemplate>
  );
}
