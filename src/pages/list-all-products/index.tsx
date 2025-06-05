import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { Products } from "./types";
import { getApiAllProducts, getApiAllProductsOrdered } from "./services";
import ListLoading from "../../components/list-loading";

export default function ListAllProducts() {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getAllProducts() {
    try {
      setIsLoading(true);
      const response = await getApiAllProducts();
      setAllProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch recent products:", error);
      throw error;
    }
    setIsLoading(false);
  }
  async function getAllOrderProducts(
    type: "descending" | "ascending"
  ): Promise<void> {
    try {
      setAllProducts([]);
      setIsLoading(true);
      const response = await getApiAllProductsOrdered(type);
      setAllProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch recent products:", error);
      throw error;
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <UserTemplate>
      <h1 className="text-2xl mb-4">Todos os itens</h1>
      <div className="mb-4">
        <p>
          Ordenar por:{" "}
          <button
            onClick={() => getAllOrderProducts("ascending")}
            className="text-blue-950 hover:text-blue-600 mx-2"
          >
            Menor Preço
          </button>{" "}
          |
          <button
            onClick={() => getAllOrderProducts("descending")}
            className="text-blue-950 hover:text-blue-600 ml-2"
          >
            Maior Preço
          </button>
        </p>
      </div>
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
    </UserTemplate>
  );
}
