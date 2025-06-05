import { useForm } from "react-hook-form";
import AdminTemplate from "../../templates/admin-template";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormProducts = {
  name: string;
  manufacturer: string;
  category: string;
  image: string;
  image2: string;
  description: string;
  price: number;
};

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("Nome do produto é obrigatório"),
  manufacturer: Yup.string().required("Fabricante é obrigatório"),
  category: Yup.string().required("Categoria é obrigatória"),
  image: Yup.string().required("Imagem é obrigatória"),
  image2: Yup.string().required("Imagem 2 é obrigatória"),
  description: Yup.string().required("Descrição é obrigatória"),
  price: Yup.number()
    .typeError("Preço deve ser um número")
    .required("Preço é obrigatório")
    .positive("Preço deve ser um valor positivo"),
});

export default function FormProducts() {
  const {
    register,
    formState: { errors },
  } = useForm<FormProducts>({ resolver: yupResolver(schemaValidation) });
  return (
    <AdminTemplate>
      <div className="flex flex-col justify-between px-[20%] py-[2%]">
        <h1 className="text-xl mb-4">Cadastro de Produto</h1>
        <form className="flex flex-col gap-4">
          <div className="flex mb-1 w-full">
            <div className="w-[50%]">
              <input
                type="text"
                {...register("name")}
                placeholder="Nome do Produto"
                className="border
           border-gray-300 rounded-md w-full p-2"
              />
              {errors.name && (
                <span className="text-red-500 text-sm ">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="w-[50%]">
              <input
                type="text"
                {...register("manufacturer")}
                placeholder="Fabricante"
                className="border p-2 w-full border-gray-300 rounded-md ml-2"
              />
              {errors.manufacturer && (
                <span className="text-red-500 text-sm">
                  {errors.manufacturer.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex mb-1 w-full gap-2">
            <div className="w-[50%]">
              <input
                type="text"
                {...register("category")}
                placeholder="Categoria"
                className="border p-2 w-full rounded-md border-gray-300"
              />
              {errors.category && (
                <span className="text-red-500 text-sm">
                  {errors.category.message}
                </span>
              )}
            </div>
            <div className="w-[50%]">
              <input
                type="file"
                {...register("image")}
                placeholder="Imagem"
                className="border p-2 w-full rounded-md border-gray-300 text-gray-500"
              />
              {errors.image && (
                <span className="text-red-500 text-sm">
                  {errors.image.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex mb-1 w-full gap-2">
            <div className="w-[50%]">
              <input
                type="file"
                {...register("image2")}
                placeholder="Imagem 2"
                className="border p-2 w-full rounded-md border-gray-300 text-gray-500"
              />
              {errors.image2 && (
                <span className="text-red-500 text-sm">
                  {errors.image2.message}
                </span>
              )}
            </div>
            <div className="w-[50%]">
              <input
                type="number"
                {...register("price")}
                placeholder="R$ 0,00"
                className="border p-2 w-full rounded-md border-gray-300"
              />
              {errors.price && (
                <span className="text-red-500 text-sm">
                  {errors.price.message}
                </span>
              )}
            </div>
          </div>
          <div>
            <textarea
              {...register("description")}
              placeholder="Descrição do Produto"
              className="border p-2 w-full rounded-md border-gray-300"
            ></textarea>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="submit"
              className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition duration-200"
            >
              Enviar
            </button>
            <button
              type="reset"
              className="bg-gray-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-gray-600 transition duration-200"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </AdminTemplate>
  );
}
