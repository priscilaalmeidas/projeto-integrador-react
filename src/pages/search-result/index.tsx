import { useParams } from "react-router-dom";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiProductsByName } from "./services";
import { useEffect, useState } from "react";
import { Products } from "./types";
import ListLoading from "../../components/list-loading";

export default function SearchProducts() {
  const searchParams = useParams();

  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const nameProduct = searchParams?.product;

  async function getProductsByName() {
    setAllProducts([]);
    setIsLoading(true);
    try {
      const response = await getApiProductsByName(nameProduct ?? "");
      setAllProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
    setIsLoading(false);
  }
  useEffect(() => {
    getProductsByName();
  }, []);
  return (
    <UserTemplate>
      <div className="">
        <h1 className="text-2xl mb-4">Página de Busca</h1>
        {isLoading && <ListLoading />}
        <div className="flex flex-wrap gap-4">
          {allProducts.map((product) => (
            <CardProduct
              key={product._id}
              id={product._id}
              name={product.name}
              image={product.url1}
              manufacturer={product.manufacturer}
              price={product.price}
            />
          ))}
        </div>
        <p>Total: {allProducts.length} </p>
      </div>
    </UserTemplate>
  );
}
