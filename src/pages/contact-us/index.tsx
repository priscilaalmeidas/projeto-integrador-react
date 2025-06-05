import AuthTemplate from "../../templates/auth-template";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ContactUs() {
  const schemaValidation = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),
    message: Yup.string().required("Mensagem é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  function handleContact(values: {
    name: string;
    email: string;
    message: string;
  }) {
    console.log("Dados do contato:", values);
  }
  return (
    <AuthTemplate>
      <div className="flex items-center justify-center h-full ">
        <div className="bg-gray-50 p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-950">
            My App
          </h2>
          <h1 className="text-md text-center mb-3">
            Fale conosco através do fomulário abaixo
          </h1>
          <form onSubmit={handleSubmit(handleContact)}>
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
              <textarea
                id="message"
                {...register("message")}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
                placeholder="Sua mensagem"
                rows={4}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-900 transition duration-200"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </AuthTemplate>
  );
}
