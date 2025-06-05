import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { Products } from "./types";
import { getApiRecentProducts } from "./services";
import ListLoading from "../../components/list-loading";

export default function ListRecentProducts() {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  async function getAllRecentsProducts() {
    try {
      setIsLoading(true);
      const response = await getApiRecentProducts();
      setAllProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch recent products:", error);
      throw error;
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getAllRecentsProducts();
  }, []);

  return (
    <UserTemplate>
      <h1 className="text-2xl mb-4">Itens Recentes</h1>
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
