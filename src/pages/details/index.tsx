import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApiProductById } from "./services";
import { Products } from "./types";

export default function Details() {
  const params = useParams();
  const id = params?.id;

  const [product, setProducts] = useState<Products>({} as Products);

  async function getProductsById() {
    try {
      const response = await getApiProductById(id ?? "");
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
  }

  useEffect(() => {
    getProductsById();
  }, []);
  return (
    <UserTemplate>
      <p className="text-[30px] font-semibold mb-4">{product.name}</p>
      <div className="flex justify-center ">
        <div className="w-full">
          <Carousel showThumbs={false}>
            <div>
              <img
                src={product.url1}
                className="w-[80%] h-[20%]"
                alt="Banner promocional"
              />
            </div>
            <div>
              <img src={product.url2} alt="Banner promocional" />
            </div>
          </Carousel>
        </div>
        <div className="ml-8">
          <div className="ml-8 background-white p-6 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2">Informações do vendedor</h2>
            <p className=" mb-4">João Silva</p>
            <p className="text-gray-700 mb-4">São Paulo - SP</p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> joaosilva@email.com
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Telefone:</strong> (11) 99999-8888
            </p>
          </div>
          <div className="ml-8 background-white p-6 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2">Preço</h2>
            <p className="text-gray-700 text-[30px] mb-4">R$ {product.price}</p>
          </div>
        </div>
      </div>
      <div className="ml-8">
        <h2 className="text-2xl font-semibold mb-2">Descrição do Produto</h2>
        <div
          className="text-gray-700 mb-4"
          dangerouslySetInnerHTML={{ __html: product.description || "" }}
        ></div>
      </div>
    </UserTemplate>
  );
}
